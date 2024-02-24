import '../scss/navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#about-me">
          <i class="fa-solid fa-user title"></i>
          <div className='hide'>Homelll</div>
        </a></li>
        <li><a href="#news">
          <div className='title'>News</div>
          <div className='hide'>Newsss</div>
        </a></li>
      </ul>
    </nav>);
}

export default Navbar;