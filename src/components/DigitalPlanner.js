import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

const DigitalPlanner = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const weekStart = startOfWeek(currentDate);

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const handleTaskChange = (day, value) => {
    setTasks({
      ...tasks,
      [day]: value,
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Michael's Digital Weekly Planner</h1>
      <div className="grid grid-cols-7 gap-4">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="p-4 bg-white shadow rounded-xl border border-gray-200"
          >
            <h2 className="text-lg font-semibold mb-2">
              {format(day, "EEEE, MMM d")}
            </h2>
            <textarea
              value={tasks[format(day, "yyyy-MM-dd")] || ""}
              onChange={(e) => handleTaskChange(format(day, "yyyy-MM-dd"), e.target.value)}
              placeholder="Add tasks here..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
              rows={5}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setCurrentDate(addDays(currentDate, -7))}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Previous Week
        </button>
        <button
          onClick={() => setCurrentDate(addDays(currentDate, 7))}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Next Week
        </button>
      </div>
    </div>
  );
};

export default DigitalPlanner;
