import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import HomeHeroSlider from "./HomeHeroSlider";
import HowWeDo from "./HowWeDo";
import OurApproach from "./OurApproach";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";

const HomePage = () => {
  return (
    <div>
      <HomeHeroSlider />
      <AboutSection />
      <BlogSection />
      <HowWeDo />
      <OurApproach />
      <OurTeam />
      <Testimonials />
      <WhatWeDo />
    </div>
  );
};

export default HomePage;
