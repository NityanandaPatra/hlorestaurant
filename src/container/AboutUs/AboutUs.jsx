import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
   
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        
        <p className="p__opensans">We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes.</p>
        <p className="p__opensans">We are committed to serving sustainably sourced seafood to promote the health of our oceans and marine life.</p>
        <p className="p__opensans">We prioritize reducing food waste through careful portioning, composting, and recycling practices.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        
        <p className="p__opensans">Farm-to-Table</p>
        <p className="p__opensans">Waste Reduction</p>
        <p className="p__opensans">Ocean-Friendly Seafood</p>
        <p className="p__opensans">Food is our common ground, a universal experience.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
