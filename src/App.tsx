import React from 'react';
import TitleBanner from "./components/TitleBanner";
import MainContent from "./pages/MainContent";
import './styles/App.css';

function App() {
  return (
      <div>
          <TitleBanner />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <MainContent />
            </div>
              <div className="col-3"></div>
          </div>
      </div>
  );
}

export default App;
