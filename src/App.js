import { useState } from "react";
import "./App.css";
import useQueryPopular from "./hooks/useQueryPopular";

function App() {
  // const [set, setState] = useState()
  const { results } = useQueryPopular();

  return <div>Popular Movies</div>;
}

export default App;
