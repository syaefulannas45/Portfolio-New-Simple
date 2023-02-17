import { useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    document.title = "Syaeful Annas | Web Dev"
  })
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
