"use client";
import { useState, useEffect } from "react";
import { calculateTaskScore, calculateMonthlyAverage, getPerformanceGrade, getSalarySuggestion } from "../utils/dataModels";

export default function PerformancePoints({ userId, userRole, employeeId = null }) {
  const [performance, setPerformance] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [monthlyScores, setMonthlyScores] = useState([]);

  useEffect(() => {
    loadPerformance();
  }, [userId, employeeId]);

  const loadPerformance = () => {
    const allPerformance = JSON.parse(localStorage.getItem("workplace_performance") || "[]");
    const targetId = employeeId || userId;
    const empPerformance = allPerformance.filter(p => p.employee_id === targetId);
    
    const allTasks = JSON.parse(localStorage.getItem("workplace_tasks") || "[]");
    const completedTasks = allTasks.filter(t => 
      t.assigned_to === targetId && t.status === "completed"
    );
    
    setTasks(completedTasks);
    
    // Calculate monthly scores
    const monthlyData = {};
    completedTasks.forEach(task => {
      if (task.performance) {
        const month = new Date(task.completed_at || task.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        if (!monthlyData[month]) {
          monthlyData[month] = [];
        }
        const score = calculateTaskScore(
          task.performance.hr_rating,
          task.performance.manager_rating,
          task.performance.admin_rating
        );
        monthlyData[month].push(score);
      }
    });
    
    const monthly = Object.entries(monthlyData).map(([month, scores]) => ({
      month,
      average: calculateMonthlyAverage(scores),
      taskCount: scores.length
    }));
    
    setMonthlyScores(monthly);
    
    // Overall performance
    const allScores = completedTasks
      .filter(t => t.performance)
      .map(t => calculateTaskScore(
        t.performance.hr_rating,
        t.performance.manager_rating,
        t.performance.admin_rating
      ));
    
    const overallAverage = calculateMonthlyAverage(allScores);
    const grade = getPerformanceGrade(overallAverage);
    
    setPerformance({
      overallAverage,
      grade,
      totalTasks: completedTasks.length,
      ratedTasks: completedTasks.filter(t => t.performance).length
    });
  };

  const canRate = userRole === "hr_manager" || userRole === "manager" || userRole === "admin" || userRole === "super_admin";

  return (
    <div id="performance" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Performance & Points</h3>
          <p className="text-sm text-gray-500">Task ratings and performance metrics</p>
        </div>
      </div>

      {performance && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Overall Score</p>
            <p className="text-2xl font-bold text-blue-600">{performance.overallAverage.toFixed(2)}/10</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Performance Grade</p>
            <p className="text-2xl font-bold text-green-600">{performance.grade.label}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Tasks</p>
            <p className="text-2xl font-bold text-purple-600">{performance.totalTasks}</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Rated Tasks</p>
            <p className="text-2xl font-bold text-orange-600">{performance.ratedTasks}</p>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Monthly Performance</h4>
        <div className="space-y-2">
          {monthlyScores.length === 0 ? (
            <p className="text-gray-500 text-sm">No monthly data available</p>
          ) : (
            monthlyScores.map((month, idx) => {
              const grade = getPerformanceGrade(month.average);
              return (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{month.month}</p>
                    <p className="text-sm text-gray-500">{month.taskCount} tasks completed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{month.average.toFixed(2)}/10</p>
                    <p className="text-xs text-gray-500">{grade.label}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">Recent Task Ratings</h4>
        <div className="space-y-2">
          {tasks.filter(t => t.performance).slice(0, 5).map((task) => {
            const score = calculateTaskScore(
              task.performance.hr_rating,
              task.performance.manager_rating,
              task.performance.admin_rating
            );
            const grade = getPerformanceGrade(score);
            return (
              <div key={task.id} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    grade.min >= 8.5 ? "bg-green-100 text-green-700" :
                    grade.min >= 7 ? "bg-blue-100 text-blue-700" :
                    grade.min >= 5 ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {score.toFixed(2)}/10
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                  <div>HR: {task.performance.hr_rating || "N/A"}/5</div>
                  <div>Manager: {task.performance.manager_rating || "N/A"}/5</div>
                  <div>Admin: {task.performance.admin_rating || "N/A"}/10</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

