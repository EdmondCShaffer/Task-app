import React from 'react';
import { Link } from 'react-router-dom';
import { useTaskContext } from '../../context/TaskContext';

const Home = () => {
  const { tasks } = useTaskContext();
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-indigo-800 to-blue-600 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to the Task App</h1>

      <div className="border-2 p-4 rounded-md mb-8">
        <p className="text-lg mb-2">
          You have completed {completedTasks.length}{' '}
          {completedTasks.length === 1 ? 'task' : 'tasks'}.
        </p>
        <p className="text-lg">
          You have {activeTasks.length}{' '}
          {activeTasks.length === 1 ? 'active task' : 'active tasks'}.
        </p>
      </div>

      <Link to="/tasks">
        <button className="shadow-lg bg-blue-500 hover:bg-blue-700 text-white mb-2 py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
          Create New Tasks
        </button>
      </Link>
    </div>
  );
};

export default Home;
