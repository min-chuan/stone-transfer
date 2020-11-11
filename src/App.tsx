import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from '@/router';

function App() {
  return (
    <div className="App">
      <Router>
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}

export default App;
