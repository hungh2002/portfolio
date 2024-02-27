import '../scss/content.scss';
import Navbar from './navbar.js';
import AboutMe from './about-me.js';
import Project from './project.js';

const Content = () => {
  return (
    <div id='content'>
      <Navbar />
      <AboutMe />
      <Project />
    </div>
  );
};

export default Content;
