import '../../css/main.css';
import GetStarted from './getStarted';
import HowWeWork from './howWeWork';
import IndustryExpertise from './industryExpertise';
import Portfolio from './portfolio';
import QuickList from './quickList';
import Services from './services';
import TechStack from './techStack';
import Testimonial from './testimonials';
import WhoWeAre from './whoWeAre';
import WhyTailored from './whyTailored';
import Slide from './slides.js';
import WhyTallen from './whyTallen';
import YourIdeas from './yourIdeas';

const MainContent = () => {
  return (
    <div>
      <QuickList />
      <WhoWeAre />
      <GetStarted />
      <Services />
      <WhyTailored />
      <Slide />
      <HowWeWork />
      <IndustryExpertise />
      {
        /*
      
      <Portfolio />
      */}
      <TechStack />
      <YourIdeas />
      <WhyTallen />
      <Testimonial />
    </div>
  );
};

export default MainContent;
