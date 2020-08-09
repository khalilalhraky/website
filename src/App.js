import React, { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [todos, setTodo] = useState(["hi"]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodo(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
