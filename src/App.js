import ToolContainer from './components/toolContainer.js';
import React from 'react';
import './App.css';


const styles={
   padding:"50px",
   backgroundColor:"yellow"
}
function App() {
  return (
    <div className="App">
      <header >
        <h1 style={styles}> Frank's Planner </h1>
        <ToolContainer />
        <div className="toolContainer" >
        
        </div>
       
      </header>
    </div>
  );
}

export default App;
