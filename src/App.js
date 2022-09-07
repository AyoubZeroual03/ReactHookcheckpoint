import React from 'react';
import { ToDoList } from './components/toDoList';
import './App.css';
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}