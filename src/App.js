import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  let state = {
    burger: [
      {
        id: 1,
        title: "Classic Burger"
      },
      {
        id: 2,
        title: "Breakfast Burger"
      }
    ]
  }
  return (
    <div>
      <h1>hello</h1>
      <List menu={state.burger} />
    </div>

  );
}

export default App;
