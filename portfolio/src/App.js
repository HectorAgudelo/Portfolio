import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Home } from './components/Home/Home';
import {About} from './components/About/About';
import{Skills} from './components/Skills/Skills'
import './App.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
