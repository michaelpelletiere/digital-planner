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
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-purple-800 drop-shadow-lg">Michael's Digital Weekly Planner</h1>
      <div className="grid grid-cols-7 gap-6">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="p-4 bg-white shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold mb-3 text-purple-700">
              {format(day, "EEEE, MMM d")}
            </h2>
            <textarea
              value={tasks[format(day, "yyyy-MM-dd")] || ""}
              onChange={(e) => handleTaskChange(format(day, "yyyy-MM-dd"), e.target.value)}
              placeholder="Add tasks here..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={5}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex gap-6">
        <button
          onClick={() => setCurrentDate(addDays(currentDate, -7))}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Previous Week
        </button>
        <button
          onClick={() => setCurrentDate(addDays(currentDate, 7))}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Next Week
        </button>
      </div>
    </div>
  );
};

export default DigitalPlanner;
