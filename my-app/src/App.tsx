import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="https://discord.com/api/oauth2/authorize?client_id=1113874631489753148&permissions=8&scope=applications.commands%20bot">Invite</a>
          <a href="https://discord.gg/HHxRfnYEZb">Discord Server</a>
        </div>
      </nav>
      <header className="App-header">
        <p className="description-text">
          Ultima
        </p>
        <p className="ultima-text">
          The most modern discord bot that has economy, moderation, automod, leveling, fun commands, useful tools, ticketing, ChatGPT and much more!
        </p>
      </header>
      <footer className="footer">
        Developed by the Ultima team
      </footer>
    </div>
  );
}

export default App;
