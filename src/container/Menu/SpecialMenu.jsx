import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Artisanal Appetizers</p>
        <div className="app__specialMenu_menu_items">
          {data.apr.map((apr, index) => (
            <MenuItem key={apr.title + index} title={apr.title} price={apr.price} tags={apr.tags} />
          ))}
        </div>
      </div>

     


      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Global Fusion Entrees</p>
        <div className="app__specialMenu_menu_items">
          {data.gfe.map((gfe, index) => (
            <MenuItem key={gfe.title + index} title={gfe.title} price={gfe.price} tags={gfe.tags} />
          ))}
        </div>
      </div>
      

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Epicurean Indulgences</p>
        <div className="app__specialMenu_menu_items">
          {data.erd.map((erd, index) => (
            <MenuItem key={erd.title + index} title={erd.title} price={erd.price} tags={erd.tags} />
          ))}
        </div>
      </div>

      
    </div>

  </div>
);

export default SpecialMenu;
