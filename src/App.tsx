import React from 'react';
import SideNav from "./components/SideNav";
import TitleBanner from "./components/TitleBanner";
import MainContent from "./pages/MainContent";
import './styles/App.css';

function App() {
  return (
      <div>
          <TitleBanner />
          <div className="row m-3">
            <SideNav />
            <MainContent />
          </div>
      </div>
  );
}

export default App;
