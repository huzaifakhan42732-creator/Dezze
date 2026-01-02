import { useState } from "react";
import Intro from "./components/intro.jsx";
import Dezze from "./components/deze.jsx";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Intro onEnter={() => setEntered(true)} />}
      {entered && <Dezze />}
    </>
  );
}
