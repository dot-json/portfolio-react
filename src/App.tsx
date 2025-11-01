import BodyContent from "./components/body-content";
import Header from "./components/header";
import Noise from "./components/noise-overlay";
import Reveal from "./components/reveal";
import Education from "./sections/Education";
import Intro from "./sections/Intro";
import Work from "./sections/Work";

function App() {
  return (
    <Reveal>
      <Header />
      <BodyContent>
        <div className="flex w-full flex-col gap-8 p-4 sm:p-6 lg:p-8">
          <Intro />
          <Work />
          <Education />
        </div>
      </BodyContent>
      <Noise />
    </Reveal>
  );
}

export default App;
