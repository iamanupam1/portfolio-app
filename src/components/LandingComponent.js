import NavbarComponent from "./common/Navbar";
import Experience from "./landing/Experience";
import Expertise from "./landing/Expertise";
import Hero from "./landing/Hero";

const LandingComponent = () => {
  return (
    <div id="landing-root">
      <Hero />
      <Expertise />
      <Experience />
    </div>
  );
};

export default LandingComponent;
