import '../scss/App.scss';
import Header from '../component/header.js';
import Footer from '../component/footer.js';
import Content from '../component/content.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      
      <Footer />
    </div>
  );
}

export default App;
