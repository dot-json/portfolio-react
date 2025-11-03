import BodyContent from "./components/body-content";
import Header from "./components/header";
import Noise from "./components/noise-overlay";
import Reveal from "./components/reveal";
import Home from "./routes/Home";
import { Routes, Route } from "react-router";
import Skills from "./routes/Skills";

function App() {
  return (
    <Reveal>
      <Header />
      <BodyContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BodyContent>
      <Noise />
    </Reveal>
  );
}

export default App;
