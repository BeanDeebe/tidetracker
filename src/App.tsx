import React from 'react';
import './styles/App.css';

function App() {
  return (
      <div>
          <div className="text-center">
              <h1>Hello, World</h1>
          </div>
          <div className="row m-3">
              <div className="col-3">
                  <h3>sidebar</h3>
              </div>
              <div className="col-5">
                  <h3>main content</h3>
              </div>
              <div className="col-4">
                  <h3>side content</h3>
              </div>
          </div>
      </div>
  );
}

export default App;
