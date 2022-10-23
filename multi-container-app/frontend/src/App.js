import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Component did mount");
    fetch("http://localhost:8000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((e) => {
        console.log("Failed fetching todos!", e);
      });

    return () => {
      console.log("Component did unmount");
    };
  }, []);

  const addTodo = async () => {
    try {
      const req = await fetch("http://localhost:8000/todos", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todoInput,
          description: "Lorem ipsum!",
        }),
      });

      const newTodo = await req.json();
      setTodos([...todos, newTodo]);
      setTodoInput("");
    } catch (e) {
      console.log("Unable to add new todo!", e);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await fetch(`http://localhost:8000/todos/${todoId}`, {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo._id !== todoId);
      });
    } catch (e) {
      console.log("Unable to delete todo!", e);
    }
  };

  const deleteBtnStyle = {
    textDecoration: "none",
    color: "red",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input
            type="text"
            id="Todo-Input"
            value={todoInput}
            onChange={(evt) => setTodoInput(evt.target.value)}
          />
          <button id="Add-Todo-Button" onClick={addTodo}>
            Add Todo
          </button>
        </p>
        <ul id="Todo-List">
          {todos.map((todo) => {
            return (
              <li key={todo._id} className="Todo-List-Item">
                {todo.title}&nbsp;&nbsp;
                <a
                  href="#"
                  style={deleteBtnStyle}
                  onClick={() => deleteTodo(todo._id)}
                >
                  x
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
