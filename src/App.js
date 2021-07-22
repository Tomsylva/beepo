import "./App.css";
import React from "react";
import { originalLibrary } from "./originalLibrary";
import Synth from "./Synth";

function App() {
  const [currentLibrary, setCurrentLibrary] = React.useState(originalLibrary);

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
