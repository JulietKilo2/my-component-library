import React from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          label="hi"
          radius={4}
          textColor="#ffffff"
          backgroundColor="#000080"
        />
      </header>
    </div>
  );
}

export default App;
