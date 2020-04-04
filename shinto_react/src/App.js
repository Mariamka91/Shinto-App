import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const res = await fetch('/api/todos');
    const todos = await res.json();
    console.log(`[DEBUG] App(cDM) todos :: ${JSON.stringify(todos, null, 2)}`);
    setTodos(todos);
  }, []);

  useEffect(() => {
    document.title = `Todolo${count}`;
    document.addEventListener('keydown', handleBackTickKeyPress);

    return () =>
      document.removeEventListener('keydown', handleBackTickKeyPress);
  }, [count]);

  function handleBackTickKeyPress(evt) {
    if (evt.key === '`') {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <h1>Welcome to Todoloo!</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
