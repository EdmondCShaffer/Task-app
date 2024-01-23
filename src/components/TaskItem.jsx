import React from 'react';
import PropTypes from 'prop-types';
import { useTaskContext } from '../context/TaskContext';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <li className="flex justify-between items-center bg-gray-100 min-w-75 border-2 rounded m-2">
      <label className="text-2xl font-semibold text-black min-w-75 ml-2">
        <Checkbox
          color="success"
          className="ml-2"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {task.title}
      </label>
      <IconButton aria-label="delete" onClick={() => deleteTask(task.id)}>
        <DeleteForeverIcon
          className="hover:animate-bounce bg-none"
          color="error"
        />
      </IconButton>
    </li>
  );
};

//Prop validation
TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskItem;
