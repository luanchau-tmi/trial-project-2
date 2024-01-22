// src/App.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './index.css';
import CuttingSystem from './CuttingSystem';
import CompanyPerformance from './CompanyPerformance';

function App() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-72 p-4">
          {/* Sidebar Content Goes Here */}
          <div className="mb-6 text-2xl font-semibold text-white">TMI VIETNAM</div>
          <div className="text-l text-gray-500 uppercase tracking-wider ml-4 mb-4 mt-20">MENU</div>
          <ul>
            <li className="mb-2">
              <div
                className={`flex items-center justify-between ${
                  showSubMenu ? 'bg-gray-700' : 'hover:bg-gray-700 hover:text-white'
                } text-gray-300 px-4 py-2 cursor-pointer transition duration-300`}
                onClick={toggleSubMenu}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faGrip} className="mr-2" />
                  <span>Dashboard</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faChevronDown} className={showSubMenu ? 'transform rotate-180' : ''} />
                </div>
              </div>
              {showSubMenu && (
                <ul className="ml-2 mt-4">
                  <li className='ml-8'>
                    {/* Use the Link component for navigation */}
                    <Link to="/cutting-system" className="text-gray-500 hover:text-white duration-300">
                      Cutting System
                    </Link>
                  </li>
                  <li className='ml-8 mt-2.5'>
                    {/* Use the Link component for navigation */}
                    <Link to="/company-performance" className="text-gray-500 hover:text-white duration-300">
                      Company Performance
                    </Link>
                  </li>
                  {/* Add more sub-items as needed */}
                </ul>
              )}
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Header */}
          <header className="bg-white shadow p-4">
            {/* Header Content Goes Here */}
            Your Header Content
          </header>

          {/* Main Content Goes Here */}
          {/* Use the Routes component to define routes */}
          <Routes>
            {/* Define a route for the Cutting System page */}
            <Route path="/cutting-system" element={<CuttingSystem />} />
            {/* Define a route for the Company Performance page */}
            <Route path="/company-performance" element={<CompanyPerformance />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
