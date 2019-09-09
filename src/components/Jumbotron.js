// All Imports.
import React from "react";

// Jumbotron Component.
function Jumbotron() {
  return (
    // Component Container.
    <div>
      {/* JSX Jumbotron Container */}
      <div className="jumbotron bg text-white text-center">
        <div className="container">
          {/* JSX Jumbotron Content */}
          <h1 className="display-3 font-weight-bold mb-5">Clicky Memory Game</h1>
          {/* JSX Game Description */}
          <p className="lead">
            Welcome to the clicky memory game! Your objective is to click on any of the
            tiles containing images, memorizing which image you clicked on. Avoid
            clicking the same images more than once, otherwise you will be penalized
            and loose all of your points. Rack up points by clicking on as many
            unique images as possible, and secure the highest top score, good luck!
            </p>
          {/* JSX Reset Game Session Icon */}
          <div className="container pl-5 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item active">
                {/* JSX Icon Describer */}
                <p className="lead font-weight-bold text-info p-0 m-0">Reset Game Session</p>
                <a className="nav-link text-white" href="#"><h2 className="display-5 text-white">
                  <i id="restartIcon" className="fa fa-refresh text-info"></i>
                </h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Do Component Export.
export default Jumbotron;
