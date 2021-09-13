import "./App.css";
import React from "react";
// import { originalLibrary } from "./originalLibrary";
import Synth from "./Synth";
import { blackElephantLibrary } from "./blackElephantLibrary";

function App() {
  const [currentLibrary, setCurrentLibrary] =
    React.useState(blackElephantLibrary);

  return (
    <div>
      <Synth
        currentLibrary={currentLibrary}
        setCurrentLibrary={setCurrentLibrary}
      />
    </div>
  );
}

export default App;
