import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HabitsWebsite = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/select")
      .then((res) => {
        setHabits(res.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleComplete = (id) => {
    // TODO: Implement completion logic
    console.log(`Habit ${id} completed`);
  };

  const handleDelete = (id) => {
    // TODO: Implement deletion logic
    console.log(`Habit ${id} deleted`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Habit Tracker</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Add Habit
          </button>
        </div>
      </nav>

      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Habits</h2>
        {habits.map((habit) => (
          <div key={habit._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{habit.name}</h3>
              <p className="text-gray-600">{habit.description}</p>
              <p className="text-sm text-gray-500">Date: {new Date(habit.date).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id={`complete-${habit._id}`}
                onChange={() => handleComplete(habit._id)}
                className="w-5 h-5"
              />
              <button
                onClick={() => handleDelete(habit._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HabitsWebsite;