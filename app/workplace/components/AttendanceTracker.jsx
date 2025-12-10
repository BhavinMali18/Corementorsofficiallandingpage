"use client";
import { useState, useEffect } from "react";

export default function AttendanceTracker({ userId, userRole, employeeId = null }) {
  const [attendance, setAttendance] = useState([]);
  const [todayAttendance, setTodayAttendance] = useState(null);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [workHours, setWorkHours] = useState(0);

  useEffect(() => {
    loadAttendance();
    checkTodayAttendance();
  }, [userId, employeeId]);

  const loadAttendance = () => {
    const allAttendance = JSON.parse(localStorage.getItem("workplace_attendance") || "[]");
    const targetId = employeeId || userId;
    const empAttendance = allAttendance.filter(a => a.employee_id === targetId);
    setAttendance(empAttendance);
  };

  const checkTodayAttendance = () => {
    const today = new Date().toDateString();
    const allAttendance = JSON.parse(localStorage.getItem("workplace_attendance") || "[]");
    const targetId = employeeId || userId;
    const todayRecord = allAttendance.find(a => 
      a.employee_id === targetId && new Date(a.date).toDateString() === today
    );
    
    if (todayRecord) {
      setTodayAttendance(todayRecord);
      setIsClockedIn(!!todayRecord.clock_in);
      
      if (todayRecord.clock_in && todayRecord.clock_out) {
        const hours = calculateWorkHours(todayRecord.clock_in, todayRecord.clock_out);
        setWorkHours(hours);
      } else if (todayRecord.clock_in) {
        const hours = calculateWorkHours(todayRecord.clock_in, new Date().toISOString());
        setWorkHours(hours);
      }
    }
  };

  const calculateWorkHours = (clockIn, clockOut) => {
    const diff = new Date(clockOut) - new Date(clockIn);
    return Math.round((diff / (1000 * 60 * 60)) * 100) / 100;
  };

  const handleClockIn = () => {
    const allAttendance = JSON.parse(localStorage.getItem("workplace_attendance") || "[]");
    const targetId = employeeId || userId;
    const today = new Date().toDateString();
    
    const todayRecord = allAttendance.find(a => 
      a.employee_id === targetId && new Date(a.date).toDateString() === today
    );
    
    if (todayRecord) {
      todayRecord.clock_in = new Date().toISOString();
    } else {
      allAttendance.push({
        id: Date.now().toString(),
        employee_id: targetId,
        date: new Date().toISOString(),
        clock_in: new Date().toISOString(),
        clock_out: null,
        work_hours: 0
      });
    }
    
    localStorage.setItem("workplace_attendance", JSON.stringify(allAttendance));
    checkTodayAttendance();
    loadAttendance();
  };

  const handleClockOut = () => {
    const allAttendance = JSON.parse(localStorage.getItem("workplace_attendance") || "[]");
    const targetId = employeeId || userId;
    const today = new Date().toDateString();
    
    const todayRecord = allAttendance.find(a => 
      a.employee_id === targetId && new Date(a.date).toDateString() === today
    );
    
    if (todayRecord && todayRecord.clock_in) {
      todayRecord.clock_out = new Date().toISOString();
      todayRecord.work_hours = calculateWorkHours(todayRecord.clock_in, todayRecord.clock_out);
    }
    
    localStorage.setItem("workplace_attendance", JSON.stringify(allAttendance));
    checkTodayAttendance();
    loadAttendance();
  };

  const canClock = !employeeId || employeeId === userId;

  return (
    <div id="attendance" className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Attendance</h3>
          <p className="text-sm text-gray-500">Track daily login/logout and work hours</p>
        </div>
      </div>

      {canClock && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Today's Status</p>
              {isClockedIn ? (
                <p className="text-lg font-semibold text-green-600">Clocked In</p>
              ) : (
                <p className="text-lg font-semibold text-gray-400">Not Clocked In</p>
              )}
              {isClockedIn && (
                <p className="text-sm text-gray-600 mt-1">Work Hours: {workHours.toFixed(2)} hrs</p>
              )}
            </div>
            <div className="flex gap-2">
              {!isClockedIn ? (
                <button
                  onClick={handleClockIn}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Clock In
                </button>
              ) : (
                <button
                  onClick={handleClockOut}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Clock Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div>
        <h4 className="font-medium text-gray-900 mb-3">Recent Attendance</h4>
        <div className="space-y-2">
          {attendance.slice(0, 7).map((record) => (
            <div key={record.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">
                  {new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </p>
                <div className="text-sm text-gray-600">
                  {record.clock_in ? (
                    <>
                      In: {new Date(record.clock_in).toLocaleTimeString()}
                      {record.clock_out && (
                        <> • Out: {new Date(record.clock_out).toLocaleTimeString()}</>
                      )}
                    </>
                  ) : (
                    <span className="text-red-500">Absent</span>
                  )}
                </div>
              </div>
              <div className="text-right">
                {record.work_hours > 0 ? (
                  <p className="font-medium text-gray-900">{record.work_hours.toFixed(2)} hrs</p>
                ) : record.clock_in ? (
                  <p className="text-sm text-gray-500">In Progress</p>
                ) : (
                  <p className="text-sm text-red-500">-</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

