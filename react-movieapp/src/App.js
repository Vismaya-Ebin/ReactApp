import { Resume } from "./Components/Resume";
import "./App.css";
import * as React from "react";

function App() {
 const styles={
   textAlign: "center"
 }
  return (
    <div>
      <nav>
        <h3 style={styles}>RESUME</h3>
      </nav>

      <Resume />
    </div>
  );
}

export default App;
