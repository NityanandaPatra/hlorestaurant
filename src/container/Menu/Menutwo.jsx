import React from 'react'
import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';
const Menutwo = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title="Menu that fits your palatte" />
            <h1 className="headtext__cormorant">Seasonal Symphony</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine  flex__center">
                <p className="app__specialMenu-menu_heading">Best From Us</p>
                <div className="app__specialMenu_menu_items">
                    {data.seasonal_menu.map((seasonal_menu, index) => (
                        <MenuItem key={seasonal_menu.title + index} title={seasonal_menu.title} price={seasonal_menu.price} tags={seasonal_menu.tags} />
                    ))}
                </div>
            </div>

            

            
        </div>

        
    </div>
);

export default Menutwo;