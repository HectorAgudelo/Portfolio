import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Home } from './components/Home/Home';
import {About} from './components/About/About';
import{Skills} from './components/Skills/Skills';
import { ProjectModalContainer } from './components/ProjectModalContainer/ProjectModalContainer';
import './App.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Home/>
      <About/>
      <Skills/>
  <ProjectModalContainer/>
    </div>
  );
}

export default App;
