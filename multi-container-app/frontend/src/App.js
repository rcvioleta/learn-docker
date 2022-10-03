import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([
    "Todo 1",
    "Todo 2",
    "Todo 3",
  ]);

  useEffect(() => {
    // let's fetch todos from our backend!
    console.log('Component did mount')
    setTodos(todos)

    return () => {
      console.log('Component did unmount')
    }
  }, [todos]);

  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="text" id="Todo-Input" value={todoInput} onChange={(evt) => setTodoInput(evt.target.value)} />
          <button id="Add-Todo-Button" onClick={addTodo}>Add Todo</button>
        </p>
        <ul id="Todo-List">
          {todos.map((todo, index) => {
            return (<li key={index} className="Todo-List-Item">{todo}</li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
