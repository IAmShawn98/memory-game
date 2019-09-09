import React from "react";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron bg text-white text-center">
        <div className="container">
          <h1 className="display-3 font-weight-bold mb-5">Clicky Game!</h1>
          <p className="lead">
            Welcome to the clicky memory game! Your objective is to click on any of the
            tiles containing images, memorizing which image you clicked on. Avoid
            clicking the same images more than once, otherwise you will be penalized
            and loose all of your points. Rack up points by clicking on as many
            unique images as possible, and secure the highest top score, good luck!
            </p>
          <div className="container pl-5 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <p class="lead font-weight-bold text-info p-0 m-0">Reset Game Session</p>
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

export default Jumbotron;
