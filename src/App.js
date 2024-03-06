import React from 'react';
import './App.css';

const Header = () => {
  return (
    <div>
      <h1>Верхня частина сайта</h1>
    </div>
  );
}

const App = () => {
  return (
  <div>
    <div className="App"><Header /></div>
    <div className="App"><Body /></div>
    <div className="App"><Footer /></div> 
  </div> 
  );
}

const Body = () => {
  return (
    <div className="App">
        <h2>Тіло сайта</h2>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
  );
}

const Footer = () => {
  return (
    <div>
      <h1>Нижня частина сайта</h1>
    </div>
  );
}

export default App;
