
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { ProjectModalContainer } from './components/ProjectModalContainer/ProjectModalContainer';
import './App.css';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import { useRef } from 'react';

import './App.css';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App'>
      <NavigationBar
        about={() => scrollDown(about)}
        home={() => scrollDown(home)}
        projects={() => scrollDown(projects)}
        contact={() => scrollDown(contact)}
      />
      <Home ref={home} />
      <About ref={about} />
      <Skills />
      <ProjectModalContainer ref={projects} />
      <ContactInfo ref={contact} />
    </div>
  );
}

export default App;
