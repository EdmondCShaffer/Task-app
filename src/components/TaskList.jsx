import React,{ useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTaskContext();
  const activeTasks = tasks.filter((task) => !task.completed);

  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    // Check if all tasks are completed
    const allTasksCompleted =
      tasks.length > 0 && tasks.every((task) => task.completed);

    // Show success message if all tasks are completed
    if (allTasksCompleted) {
      setSuccessMessage(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
    }
  }, [tasks]);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-indigo-800 to-blue-600 text-white p-8">
      {successMessage && (
        <div className="bg-green-500 bg-opacity-75 p-4 text-white mb-4 rounded-md">
          Congratulations! All tasks have been completed.
        </div>
      )}

      {!successMessage && activeTasks.length === 0 ? (
        <div className="bg-yellow-500 bg-opacity-75 p-4 text-white mb-4 rounded-md">
          No active tasks. Add a new task!
        </div>
      ) : (
        <div className="w-75 border-2">
          <h1 className="text-4xl font-extrabold m-4">Active Tasks</h1>
          <p className="text-lg mb-4 text-center ">
            {activeTasks.length > 0
              ? `You have ${activeTasks.length} ${
                  activeTasks.length === 1 ? 'active task' : 'active tasks'
                }.`
              : 'No active tasks yet.'}
          </p>
          <ul className="list-disc list-inside rounded">
            {activeTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
