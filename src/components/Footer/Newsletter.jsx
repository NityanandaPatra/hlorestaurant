import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Welcome to our Fam</h1>
      
    </div>
    <div className="app__newsletter-input flex__center">
      
      <pre style={{color:"#ffffff"}}>
        {'An epicurean delight! The fusion of flavors in every dish is simply extraordinary.'}
      </pre>
      <p>FoodieConnoisseur,LA,USA</p>
      
      
      
    </div>
  </div>
);

export default Newsletter;
