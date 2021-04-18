import React, {useState} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalstyle';
import DropdownContainer from './components/Dropdown'
import InfoSection from './components/InfoSection'
import { InfoData } from './data/InfoData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropdownContainer isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
