import '../scss/content.scss';
import Navbar from './navbar.js';
import AboutMe from './about-me.js';

const Content = () => {
  return (
    <div id='content'>
      <Navbar />
      <AboutMe />
    </div>);
}

export default Content;