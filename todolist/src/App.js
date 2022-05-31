import React from 'react';
import TodoHead from './components/TodoHead';
import TodoTemplate from './components/TodoTemplate';
import './App.css';

function App() {
  return (

    <TodoTemplate>
      <TodoHead />
    </TodoTemplate>
  
  );
}

export default App;