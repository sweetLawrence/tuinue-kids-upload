import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UploadImage from "./components/UploadImage";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <UploadImage />
  </div>;
}

export default App;
