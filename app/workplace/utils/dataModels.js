// Data models and utilities for workplace management system

export const TASK_STATUS = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  ON_HOLD: "on_hold",
  CANCELLED: "cancelled"
};

export const TASK_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  URGENT: "urgent"
};

export const PROJECT_STATUS = {
  PLANNING: "planning",
  ACTIVE: "active",
  ON_HOLD: "on_hold",
  COMPLETED: "completed",
  CANCELLED: "cancelled"
};

export const LEAVE_STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected"
};

export const LEAVE_TYPE = {
  SICK: "sick",
  CASUAL: "casual",
  EARNED: "earned",
  COMP_OFF: "comp_off",
  OVERTIME: "overtime"
};

export const PERFORMANCE_GRADE = {
  A: { min: 8.5, max: 10, label: "A - Excellent" },
  B: { min: 7, max: 8.49, label: "B - Good" },
  C: { min: 5, max: 6.99, label: "C - Average" },
  D: { min: 0, max: 4.99, label: "D - Needs Improvement" }
};

// Rating weights (configurable by admin)
export const RATING_WEIGHTS = {
  HR: 0.3,
  MANAGER: 0.3,
  ADMIN: 0.4
};

// Calculate task score from ratings
export function calculateTaskScore(hrRating, managerRating, adminRating) {
  // Convert all to /10 scale
  const hrScore10 = (hrRating || 0) * 2; // 0-5 to 0-10
  const managerScore10 = (managerRating || 0) * 2; // 0-5 to 0-10
  const adminScore10 = adminRating || 0; // Already 0-10
  
  // Apply weights
  const finalScore = (
    hrScore10 * RATING_WEIGHTS.HR +
    managerScore10 * RATING_WEIGHTS.MANAGER +
    adminScore10 * RATING_WEIGHTS.ADMIN
  );
  
  return Math.round(finalScore * 100) / 100; // Round to 2 decimals
}

// Get performance grade from score
export function getPerformanceGrade(score) {
  if (score >= PERFORMANCE_GRADE.A.min) return PERFORMANCE_GRADE.A;
  if (score >= PERFORMANCE_GRADE.B.min) return PERFORMANCE_GRADE.B;
  if (score >= PERFORMANCE_GRADE.C.min) return PERFORMANCE_GRADE.C;
  return PERFORMANCE_GRADE.D;
}

// Calculate monthly average score
export function calculateMonthlyAverage(taskScores) {
  if (!taskScores || taskScores.length === 0) return 0;
  const sum = taskScores.reduce((acc, score) => acc + score, 0);
  return Math.round((sum / taskScores.length) * 100) / 100;
}

// Salary suggestion based on performance
export function getSalarySuggestion(currentCTC, monthlyScore) {
  if (monthlyScore >= 9) {
    return { suggestion: currentCTC * 1.1, reason: "Excellent performance - Recommend 10% hike" };
  } else if (monthlyScore >= 7) {
    return { suggestion: currentCTC * 1.05, reason: "Good performance - Recommend 5% hike" };
  } else if (monthlyScore >= 5) {
    return { suggestion: currentCTC, reason: "Average performance - Maintain current salary" };
  } else {
    return { suggestion: currentCTC, reason: "Needs improvement - Consider training" };
  }
}

// Local storage helpers
export const StorageKeys = {
  WORKPLACE_USER: "workplaceUser",
  EMPLOYEES: "workplace_employees",
  PROJECTS: "workplace_projects",
  TASKS: "workplace_tasks",
  PERFORMANCE: "workplace_performance",
  DOCUMENTS: "workplace_documents",
  SECRETS: "workplace_secrets",
  ATTENDANCE: "workplace_attendance",
  LEAVES: "workplace_leaves",
  PAYROLL: "workplace_payroll"
};

// Initialize default data
export function initializeWorkplaceData() {
  if (typeof window === "undefined") return;
  
  // Initialize employees if not exists
  if (!localStorage.getItem(StorageKeys.EMPLOYEES)) {
    localStorage.setItem(StorageKeys.EMPLOYEES, JSON.stringify([]));
  }
  
  // Initialize projects if not exists
  if (!localStorage.getItem(StorageKeys.PROJECTS)) {
    localStorage.setItem(StorageKeys.PROJECTS, JSON.stringify([]));
  }
  
  // Initialize tasks if not exists
  if (!localStorage.getItem(StorageKeys.TASKS)) {
    localStorage.setItem(StorageKeys.TASKS, JSON.stringify([]));
  }
  
  // Initialize performance if not exists
  if (!localStorage.getItem(StorageKeys.PERFORMANCE)) {
    localStorage.setItem(StorageKeys.PERFORMANCE, JSON.stringify([]));
  }
  
  // Initialize documents if not exists
  if (!localStorage.getItem(StorageKeys.DOCUMENTS)) {
    localStorage.setItem(StorageKeys.DOCUMENTS, JSON.stringify([]));
  }
  
  // Initialize secrets if not exists
  if (!localStorage.getItem(StorageKeys.SECRETS)) {
    localStorage.setItem(StorageKeys.SECRETS, JSON.stringify([]));
  }
  
  // Initialize attendance if not exists
  if (!localStorage.getItem(StorageKeys.ATTENDANCE)) {
    localStorage.setItem(StorageKeys.ATTENDANCE, JSON.stringify([]));
  }
  
  // Initialize leaves if not exists
  if (!localStorage.getItem(StorageKeys.LEAVES)) {
    localStorage.setItem(StorageKeys.LEAVES, JSON.stringify([]));
  }
  
  // Initialize payroll if not exists
  if (!localStorage.getItem(StorageKeys.PAYROLL)) {
    localStorage.setItem(StorageKeys.PAYROLL, JSON.stringify([]));
  }
}



