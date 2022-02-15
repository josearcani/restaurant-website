import React from 'react';
import { images } from '../../constants';
import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className="app__header-bar app__bg section__padding">
      <div className="app__header-bar_img">
        <img src={ images.barHome } alt="bar" />
      </div>
      <h1 className="app__header-bar-h1">On The Rocks</h1>
    </div>
  )
}

export default HeaderBar;