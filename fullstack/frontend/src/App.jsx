import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  return (
    <>
      <h1>Full Stack frontend and backend</h1>
      <h3>JOKES: {jokes.length}</h3>

      {jokes.map((jokes) => {
        return (
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
