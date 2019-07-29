import React from 'react';
import SplashPage from './components/SplashPage';
import NavBar from "./components/NavBar";
import About from "./components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './styles/Site.scss';

function App() {
  return (
    <div className="site-container">
      <div className="splash-container">
        <SplashPage />
      </div>

      <div className="site-components">
          <NavBar />
          <About />
      </div>
    </div>
  );
}

export default App;
