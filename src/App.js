import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import VerticalNavbar from './components/VerticalNavbar';
import Home from './components/Home';
import Home_1 from './components/Home copy';
import About from './components/About';
import Technologies from './components/Technologies';
import Resources from './components/Resources';
import Investors from './components/Investors';
import Offerings from './components/Offerings';
import Industries from './components/Industries';
import Templates from './components/Templates';
import DeviceTemplates from './components/DeviceTemplates';
import FeatureTemplates from './components/FeatureTemplates';
import Inventory from './components/Technologies';
import Devices from './components/Devices';
import './App.css'; // Import custom CSS for app styling

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <VerticalNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home_1 />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/investors" element={<Investors />} /> 
            <Route path="/about" element={<About />}>
              <Route path="device-templates" element={<DeviceTemplates />} />
              <Route path="feature-templates" element={<FeatureTemplates />} />
            </Route>
            <Route path="/inventory" element={<Inventory />}>
              <Route path="devices" element={<Devices />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
