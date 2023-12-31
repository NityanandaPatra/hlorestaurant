import React from 'react';


import { AboutUs, Chef, FindUs, Footer, Gallery, Header,  Laurels, SpecialMenu,Menutwo} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    
    <SpecialMenu />
    <Menutwo />
    <Chef />
    
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
