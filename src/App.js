// All Imports.
import React from 'react';
import '../src/App.css';
import Jumbotron from '../src/components/Jumbotron';
import Navbar from '../src/components/Navbar';

// Renders All Application Components.
function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
}

// Do Export.
export default App;
