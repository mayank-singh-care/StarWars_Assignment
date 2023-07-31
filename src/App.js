import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="container">
      <Header category={category} setCategory={setCategory} />
      <div style={{ display: "flex" }}>
        <Menu setCategory={setCategory} />
        <Dashboard category={category} />
      </div>
    </div>
  );
}

export default App;
