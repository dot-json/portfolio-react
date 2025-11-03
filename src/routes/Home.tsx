import Education from "../sections/Education";
import Intro from "../sections/Intro";
import Work from "../sections/Work";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <Intro />
      <Work />
      <Education />
    </div>
  );
};

export default Home;
