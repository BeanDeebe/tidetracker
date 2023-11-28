import React from 'react';
import TitleBanner from "./components/TitleBanner";
import MainContent from "./pages/MainContent";
import StationDetails from "./pages/StationDetails";
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
      <div>
          <TitleBanner />
          <Router>
              <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/station/:id" element={<StationDetails />}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
