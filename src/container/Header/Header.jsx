import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the food" />
      <h1 className="app__header-h1">Seasoned with love</h1>
      <p style={{ color: "var(--color-golden"}}>Epicurean Symphony offers a sophisticated and cozy ambiance, with contemporary decor and soft lighting, creating the perfect setting for an unforgettable dining experience.</p>
      <p className="p__opensans" style={{ margin: '1rem 0' }}> </p>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
