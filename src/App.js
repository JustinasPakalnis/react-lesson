import { useState, useEffect, useContext } from "react";
import "./App.css";
import PageOne from "./components/PageOne";

function App() {
  return (
    <div className="App">
      <PageOne text="Kugelis" age="12" />
    </div>
  );
}

export default App;
