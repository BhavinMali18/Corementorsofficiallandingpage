// Secrets Vault - Encrypted storage for API keys, credentials, .env values
// Note: In production, use proper server-side encryption (AES-256)

// Simple encryption/decryption (for demo - use proper encryption in production)
function simpleEncrypt(text, key = "corementors-secret-key") {
  // This is a simple demo encryption - USE PROPER ENCRYPTION IN PRODUCTION
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(result);
}

function simpleDecrypt(encrypted, key = "corementors-secret-key") {
  // This is a simple demo decryption - USE PROPER ENCRYPTION IN PRODUCTION
  try {
    const text = atob(encrypted);
    let result = "";
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
  } catch (e) {
    return "";
  }
}

// Mask secret value
export function maskSecret(value, visibleChars = 4) {
  if (!value || value.length <= visibleChars) return "****";
  return value.substring(0, visibleChars) + "*".repeat(Math.min(value.length - visibleChars, 12));
}

// Create a secret
export function createSecret(projectId, keyName, value, environment = "dev", createdBy) {
  const secrets = getSecrets();
  const newSecret = {
    id: Date.now().toString(),
    project_id: projectId,
    key_name: keyName,
    encrypted_value: simpleEncrypt(value),
    environment,
    created_by: createdBy,
    updated_by: createdBy,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    access_log: [{
      action: "created",
      user: createdBy,
      timestamp: new Date().toISOString()
    }]
  };
  
  secrets.push(newSecret);
  localStorage.setItem("workplace_secrets", JSON.stringify(secrets));
  return newSecret;
}

// Get all secrets
export function getSecrets() {
  const secrets = localStorage.getItem("workplace_secrets");
  return secrets ? JSON.parse(secrets) : [];
}

// Get secret by ID (with access log)
export function getSecretById(secretId, userId, userRole) {
  const secrets = getSecrets();
  const secret = secrets.find(s => s.id === secretId);
  
  if (!secret) return null;
  
  // Check access rights
  if (!hasSecretAccess(secret, userId, userRole)) {
    return null;
  }
  
  // Log access
  logSecretAccess(secretId, userId, "viewed");
  
  return {
    ...secret,
    value: null, // Don't return decrypted value by default
    masked_value: maskSecret(simpleDecrypt(secret.encrypted_value))
  };
}

// Reveal secret value (with logging)
export function revealSecret(secretId, userId, userRole) {
  const secrets = getSecrets();
  const secret = secrets.find(s => s.id === secretId);
  
  if (!secret) return null;
  
  // Check access rights
  if (!hasSecretAccess(secret, userId, userRole)) {
    return null;
  }
  
  // Log reveal
  logSecretAccess(secretId, userId, "revealed");
  
  return {
    ...secret,
    value: simpleDecrypt(secret.encrypted_value),
    masked_value: maskSecret(simpleDecrypt(secret.encrypted_value))
  };
}

// Check if user has access to secret
function hasSecretAccess(secret, userId, userRole) {
  // Super admin and admin have full access
  if (userRole === "super_admin" || userRole === "admin") {
    return true;
  }
  
  // Developers can see project-level secrets (read only)
  if (userRole === "developer") {
    // In production, check if user is assigned to the project
    return true; // Simplified for demo
  }
  
  return false;
}

// Log secret access
function logSecretAccess(secretId, userId, action) {
  const secrets = getSecrets();
  const secret = secrets.find(s => s.id === secretId);
  
  if (secret) {
    secret.access_log = secret.access_log || [];
    secret.access_log.push({
      action,
      user: userId,
      timestamp: new Date().toISOString()
    });
    secret.updated_at = new Date().toISOString();
    
    localStorage.setItem("workplace_secrets", JSON.stringify(secrets));
  }
}

// Update secret (admin/superadmin only)
export function updateSecret(secretId, newValue, userId, userRole) {
  if (userRole !== "super_admin" && userRole !== "admin") {
    throw new Error("Unauthorized: Only admin/superadmin can update secrets");
  }
  
  const secrets = getSecrets();
  const secret = secrets.find(s => s.id === secretId);
  
  if (!secret) return null;
  
  secret.encrypted_value = simpleEncrypt(newValue);
  secret.updated_by = userId;
  secret.updated_at = new Date().toISOString();
  logSecretAccess(secretId, userId, "updated");
  
  localStorage.setItem("workplace_secrets", JSON.stringify(secrets));
  return secret;
}

// Delete secret (admin/superadmin only)
export function deleteSecret(secretId, userId, userRole) {
  if (userRole !== "super_admin" && userRole !== "admin") {
    throw new Error("Unauthorized: Only admin/superadmin can delete secrets");
  }
  
  const secrets = getSecrets();
  const filtered = secrets.filter(s => s.id !== secretId);
  localStorage.setItem("workplace_secrets", JSON.stringify(filtered));
  
  return true;
}

// Get secrets by project
export function getSecretsByProject(projectId, userId, userRole) {
  const secrets = getSecrets();
  return secrets
    .filter(s => s.project_id === projectId && hasSecretAccess(s, userId, userRole))
    .map(s => ({
      ...s,
      value: null,
      masked_value: maskSecret(simpleDecrypt(s.encrypted_value))
    }));
}

// Export secret as .env format
export function exportSecretAsEnv(secretId, userId, userRole) {
  const secret = revealSecret(secretId, userId, userRole);
  if (!secret) return null;
  
  return `${secret.key_name}=${secret.value}`;
}



