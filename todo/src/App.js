import React, {Component} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoForm />
        <ToDoList />
      </div>
    )
  }

}

export default App;
