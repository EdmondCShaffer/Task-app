import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create a context to hold the state and functions related to tasks
const TaskContext = createContext();

const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

// TaskProvider component to manage tasks state and provide context to children
export const TaskProvider = ({ children }) => {
  // localStorage hook to manage the tasks
  const [tasks, setTasks] = useLocalStorage('tasks', []);


  // Function to add a new task
  const addTask = (title) => {
    if (title.length > 0) {
      setTasks((currentTasks) => [
        ...currentTasks,
        //TODO: Implement UUID Math.random could create dup Id
        { id: Math.random(), title, completed: false },
      ]);
    }
  };

  // Function to toggle the completion status of a task
  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };



  // Get completed tasks
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, completedTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// PropTypes validation for TaskProvider component
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to consume the TaskContext in functional components
export const useTaskContext = () => {
  return useContext(TaskContext);
};
