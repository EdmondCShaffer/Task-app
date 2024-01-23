import React from 'react';
import { useTaskContext } from '../../context/TaskContext';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CompletedTasks = () => {
  const { completedTasks, deleteTask } = useTaskContext();

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-indigo-800 to-blue-600 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-4">Completed Tasks</h1>
      <p className="text-lg mb-8">
        {completedTasks.length > 0
          ? `You have completed ${completedTasks.length} ${
              completedTasks.length === 1 ? 'task' : 'tasks'
            }.`
          : 'No completed tasks yet.'}
      </p>

      {completedTasks.length > 0 && (
        <div className="w-75 border-2">
          <ul className="list-disc list-inside">
            {completedTasks.map((task) => (
              <li
                className="flex justify-between items-center bg-gray-100 min-w-75 border-2 rounded m-2"
                key={task.id}
              >
                <label className="text-2xl font-semibold text-black min-w-75 ml-2">
                  <Checkbox
                    color="success"
                    className="ml-2"
                    type="checkbox"
                    checked={task.completed}
                    disabled
                    sx={{ '&.Mui-checked': { color: '#4CAF50' } }}
                  />
                  <span className="line-through ml-2">{task.title}</span>
                </label>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <DeleteForeverIcon
                    className="hover:animate-bounce"
                    color="error"
                  />
                </IconButton>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompletedTasks;
