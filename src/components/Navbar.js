// All Imports.
import React from 'react';

// NavBar Component.
function Navbar() {
    return (
        // Component Container.
        <div>
            {/* JSX Navbar Container */}
            <nav className="navbar navbar-expand-lg bg-purple p-1 shadow-lg">
                {/* JSX Navbar Brand */}
                <div className="container-fluid ml-5">
                    <a className="navbar-brand" href="#">
                        <h2 className="display-4 font-weight-bold text-white">Clicky <i className="animated pulse infinite fa fa-hand-pointer-o" aria-hidden="true"></i> Game</h2>
                    </a>
                </div>
                {/* JSX Navbar Middle Piece? Yeah, Let's Go With That! (Gives Space Between Navbar Brand and Points) */}
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
                {/* JSX Point Counter */}
                <div className="container p-0 offset-2">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">
                                {/* This will be where dynamic DOM Counting WIll Happen In Our Clicker Game */}
                                <h2 className="display-5 text-white">Score: 0 | Top Score: 0</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

// Do Export.
export default Navbar;