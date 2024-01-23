import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CompletedTasks from './components/pages/Completed';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NavMenu from './components/NavMenu';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tasks"
            element={
              <>
                <TaskForm />
                <TaskList />
              </>
            }
          />
          <Route path="/completed-tasks" element={<CompletedTasks />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
