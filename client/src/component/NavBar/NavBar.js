import React, { Component } from 'react';
import './NavBar.css'

import searchIcon from '../../Icon/search-solid.svg';
import settingIcon from '../../Icon/cog-solid.svg';
import menuIcon from '../../Icon/bars-solid.svg'

class NavBar extends Component {

  render() { 
    return ( 
      <div className="NavBar">
        <div className="NavBarBrand">
          <button className="toggle-sidebar"><img src={menuIcon} alt="Menu"/></button>
          <div className="logo">
            <img src="https://dummyimage.com/100x100/000/fff&text=logo" alt="logo" />
            <a href='/'>Note App</a>
          </div>
        </div>
        <div className="navbar-btn-wrapped">
          <form className="search-form" action="/search" method="GET"> 
            <input type="text" 
            class="search-box" 
            placeholder="Search" 
            name="searchText"
            ref="searchText"/>
            <button className="navbar-btn" type="submit">
              <img src={searchIcon} alt="searchIcon"/>
            </button>
          </form>
          <button className="navbar-btn">
            <img src={settingIcon} alt="settionIcon"/>
          </button>
        </div>
        <div className="account">
          <span>Name</span>
          <div className="avatar">
            <a href="#">
              <img
              src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
              alt="avatar" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
 
export default NavBar;