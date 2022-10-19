import { useState } from "react";
import "./styles.css";
import User from "./User";
// Passing state from parent to child as a prop is lifting state up
export default function App() {
  const [name, setName] = useState("Saransh");
  return (
    <div className="App">
      <h1>Lifting state up </h1>
      <User name={name} />
    </div>
  );
}
