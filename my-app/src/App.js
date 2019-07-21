import React from 'react';
import SplashPage from './components/SplashPage';
import NavBar from "./components/NavBar";
import './styles/Site.scss';

function App() {
  return (
    <div class="site-container">
      <div class="splash-container">
        <SplashPage />
      </div>

      <div class="site-components">
          <NavBar />     
      </div>
    </div>
  );
}

export default App;
