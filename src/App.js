import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Boundary from './components/Boundary';
import UserManagement from './sections/UserManagement';
import RoleManagement from './sections/RoleManagement';
import DynamicPermission from './sections/DynamicPermission';
import HomePage from './components/HomePage';
import { useTheme } from './context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Boundary>
      <Router>
        <div className={`app-container ${theme}`}>
          {/* Navbar */}
          <Navbar />
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn fixed top-4 right-6 p-3 rounded-full shadow-md transform transition-transform hover:scale-110"
          >
            {theme === 'light' ? <FaMoon className="text-2xl" /> : <FaSun className="text-2xl" />}
          </button>

          {/* Main Routing */}
          <div className="container mx-auto mt-8 p-6 transition-all ease-in-out duration-500">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/roles" element={<RoleManagement />} />
              <Route path="/permissions" element={<DynamicPermission />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Boundary>
  );
};

export default App;
