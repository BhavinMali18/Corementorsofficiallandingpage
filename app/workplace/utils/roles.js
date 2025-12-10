// Role definitions and routing
export const WORKPLACE_ROLES = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  MANAGER: "manager",
  HR_MANAGER: "hr_manager",
  GFX: "gfx",
  VFX: "vfx",
  DEVELOPER: "developer",
  BUSINESS_DEVELOPER: "business_developer",
  ACCOUNTS: "accounts",
  EMPLOYEE: "employee"
};

// Role-based dashboard routes
export const ROLE_DASHBOARDS = {
  [WORKPLACE_ROLES.SUPER_ADMIN]: "/workplace/super-admin",
  [WORKPLACE_ROLES.ADMIN]: "/workplace/admin",
  [WORKPLACE_ROLES.MANAGER]: "/workplace/manager",
  [WORKPLACE_ROLES.HR_MANAGER]: "/workplace/hr-manager",
  [WORKPLACE_ROLES.GFX]: "/workplace/gfx",
  [WORKPLACE_ROLES.VFX]: "/workplace/vfx",
  [WORKPLACE_ROLES.DEVELOPER]: "/workplace/developer",
  [WORKPLACE_ROLES.BUSINESS_DEVELOPER]: "/workplace/business-developer",
  [WORKPLACE_ROLES.ACCOUNTS]: "/workplace/accounts",
  [WORKPLACE_ROLES.EMPLOYEE]: "/workplace/employee"
};

// Email pattern validation: name.role@corementors.in
export function validateWorkplaceEmail(email) {
  if (!email) return false;
  
  const emailLower = email.toLowerCase();
  const pattern = /^[a-z0-9._-]+\.[a-z0-9_-]+@corementors\.in$/;
  
  return pattern.test(emailLower);
}

// Role detection from email pattern: name.role@corementors.in
export function detectRoleFromEmail(email) {
  if (!email) return WORKPLACE_ROLES.EMPLOYEE;
  
  const emailLower = email.toLowerCase();
  
  // Extract role from pattern: name.role@corementors.in
  const match = emailLower.match(/^[a-z0-9._-]+\.([a-z0-9_-]+)@corementors\.in$/);
  if (!match || !match[1]) {
    return WORKPLACE_ROLES.EMPLOYEE;
  }
  
  const rolePart = match[1].toLowerCase();
  
  // Map role strings to role constants
  const roleMap = {
    "superadmin": WORKPLACE_ROLES.SUPER_ADMIN,
    "super_admin": WORKPLACE_ROLES.SUPER_ADMIN,
    "admin": WORKPLACE_ROLES.ADMIN,
    "manager": WORKPLACE_ROLES.MANAGER,
    "hrmanager": WORKPLACE_ROLES.HR_MANAGER,
    "hr_manager": WORKPLACE_ROLES.HR_MANAGER,
    "hr": WORKPLACE_ROLES.HR_MANAGER,
    "gfx": WORKPLACE_ROLES.GFX,
    "graphics": WORKPLACE_ROLES.GFX,
    "designer": WORKPLACE_ROLES.GFX,
    "vfx": WORKPLACE_ROLES.VFX,
    "visualeffects": WORKPLACE_ROLES.VFX,
    "developer": WORKPLACE_ROLES.DEVELOPER,
    "dev": WORKPLACE_ROLES.DEVELOPER,
    "businessdeveloper": WORKPLACE_ROLES.BUSINESS_DEVELOPER,
    "business_developer": WORKPLACE_ROLES.BUSINESS_DEVELOPER,
    "businessdev": WORKPLACE_ROLES.BUSINESS_DEVELOPER,
    "bizdev": WORKPLACE_ROLES.BUSINESS_DEVELOPER,
    "sales": WORKPLACE_ROLES.BUSINESS_DEVELOPER,
    "accounts": WORKPLACE_ROLES.ACCOUNTS,
    "account": WORKPLACE_ROLES.ACCOUNTS,
    "finance": WORKPLACE_ROLES.ACCOUNTS,
    "accountant": WORKPLACE_ROLES.ACCOUNTS
  };
  
  return roleMap[rolePart] || WORKPLACE_ROLES.EMPLOYEE;
}

// Get dashboard route for role
export function getDashboardRoute(role) {
  return ROLE_DASHBOARDS[role] || ROLE_DASHBOARDS[WORKPLACE_ROLES.EMPLOYEE];
}

