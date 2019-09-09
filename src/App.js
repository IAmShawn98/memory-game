import React from 'react';
import '../src/App.css';
import Jumbotron from '../src/components/Jumbotron';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-purple p-1 shadow-lg">
        <div className="container-fluid ml-5">
          <a className="navbar-brand" href="#">
            <h2 className="display-4 font-weight-bold text-white">Clicky <i className="animated pulse infinite fa fa-hand-pointer-o" aria-hidden="true"></i> Game</h2>
          </a>
        </div>
        <div className="container pl-5 offset-2">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#"><h2 className="display-5 text-white">
                {/* Some Sort of text here for right and wrong answers */}
              </h2>
              </a>
            </li>
          </ul>
        </div>
        <div className="container p-0 offset-2">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                <h2 className="display-5 text-white">Score: 0 | Top Score: 0</h2>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Jumbotron />
    </div>
  );
}

export default App;
