"use client";
import { useState } from "react";
import { calculateTaskScore } from "../utils/dataModels";

export default function TaskRating({ task, userId, userRole, onRate }) {
  const [ratings, setRatings] = useState({
    hr_rating: task.performance?.hr_rating || 0,
    manager_rating: task.performance?.manager_rating || 0,
    admin_rating: task.performance?.admin_rating || 0
  });

  const canRateHR = userRole === "hr_manager";
  const canRateManager = userRole === "manager";
  const canRateAdmin = userRole === "admin" || userRole === "super_admin";

  const handleRate = (type, value) => {
    const newRatings = { ...ratings, [type]: parseInt(value) };
    setRatings(newRatings);
    
    if (onRate) {
      onRate(task.id, {
        hr_rating: canRateHR ? newRatings.hr_rating : task.performance?.hr_rating || 0,
        manager_rating: canRateManager ? newRatings.manager_rating : task.performance?.manager_rating || 0,
        admin_rating: canRateAdmin ? newRatings.admin_rating : task.performance?.admin_rating || 0
      });
    }
  };

  const finalScore = calculateTaskScore(ratings.hr_rating, ratings.manager_rating, ratings.admin_rating);

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900">{task.title}</h4>
        <span className="text-sm font-semibold text-blue-600">{finalScore.toFixed(2)}/10</span>
      </div>
      
      <div className="space-y-3">
        {canRateHR && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HR Rating (0-5)
            </label>
            <select
              value={ratings.hr_rating}
              onChange={(e) => handleRate("hr_rating", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {[0, 1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}
        
        {canRateManager && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Manager Rating (0-5)
            </label>
            <select
              value={ratings.manager_rating}
              onChange={(e) => handleRate("manager_rating", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {[0, 1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}
        
        {canRateAdmin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admin Rating (0-10)
            </label>
            <select
              value={ratings.admin_rating}
              onChange={(e) => handleRate("admin_rating", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      
      {task.performance && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
          <p>HR: {task.performance.hr_rating || "N/A"}/5</p>
          <p>Manager: {task.performance.manager_rating || "N/A"}/5</p>
          <p>Admin: {task.performance.admin_rating || "N/A"}/10</p>
        </div>
      )}
    </div>
  );
}

