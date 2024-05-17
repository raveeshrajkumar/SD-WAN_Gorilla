import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import VerticalNavbar from './components/VerticalNavbar';
import Home_1 from './components/Home copy';
import Templates from './components/Templates';
import DeviceTemplates from './components/DeviceTemplates';
import FeatureTemplates from './components/FeatureTemplates';
import Devices from './components/Devices';
import './App.css'; // Import custom CSS for app styling
import Signup from './components/Signup';
import Login from './components/Login';
import Inventory from './components/inventory';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <VerticalNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home_1 />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/templates" element={<Templates />}>
              <Route path="device-templates" element={<DeviceTemplates />} />
              <Route path="feature-templates" element={<FeatureTemplates />} />
            </Route>
            <Route path="/inventory" element={<Inventory />}>
              <Route path="/inventory/devices" element={<Devices />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
