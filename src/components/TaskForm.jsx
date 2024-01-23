import React,{ useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  //Handles adding new task and resets form text
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };

  return (
    <>
      <div>
        <form
          className="flex flex-row justify-center items-center mb-4"
          onSubmit={handleSubmit}
        >
          <input
            className="shadow-md w-80 border border-gray-400 mr-2 px-4 py-2 rounded "
            type="text"
            placeholder="Add new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
