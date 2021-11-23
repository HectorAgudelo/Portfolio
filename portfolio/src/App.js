import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Footer } from './components/Footer/Footer';
import './App.css';
import ImgBackground from './images/markus-spiske-GXBF7vaC6L8-unsplash.jpeg';

function App() {
  return (
    <div
      className='App'
      style={{
        background: `linear-gradient(to right, transparent,1%, black), url(${ImgBackground})`,
        backgroundSize: 'contain',
      }}
    >
      <NavigationBar />
      <Footer />
    </div>
  );
}

export default App;
