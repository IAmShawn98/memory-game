import React from "react";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron bg text-white text-center">
        <div className="container">
          <h1 className="display-3 font-weight-bold">Clicky Game!</h1>
          <h2 className="mt-3">Objective:</h2>
          <p className="lead">
            Start by clickking on any of the images below, and doing so will grant you a point.
            Don't click on any image more than once however, that restarts your point counter.
            Do your best and rank up that top score value, good luck!
            </p>
          <div className="container pl-5 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#"><h2 className="display-5 text-white">
                  <i id="restartIcon" className="fa fa-refresh"></i>
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

export default Jumbotron;
