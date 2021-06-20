import React from 'react';
import './styles/App.css';
import TodoList from './features/todo/todolist'
import Header from './components/header'

const App:React.FC = () => {

  return (
    <div className="App">
      <div className="content">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
