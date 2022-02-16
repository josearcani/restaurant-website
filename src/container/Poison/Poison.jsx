import React from 'react';
import './Poison.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';



const Poison = () => {
  return (
    <div className="app__poison section__padding">
      <div className="app__poison-title">
        <SubHeading title="Wide Range To Choose From" />
        <h1 className="headtext__cormorant">What's Your Poison?</h1>
      </div>

      <div className="app__poison-images">
        <div className="app__poison-images_card flex-center">
          <img src={ images.poison01 } alt="poison" />
          <p className="app__poison-images-icon p__cormorant">Beer</p>
        </div>
        <div className="app__poison-images_card flex-center">
          <img src={ images.poison02 } alt="poison" />
          <p className="app__poison-images-icon p__cormorant">Wine</p>
        </div>
        <div className="app__poison-images_card flex-center">
          <img src={ images.poison03 } alt="poison" />
          <p className="app__poison-images-icon p__cormorant">Cocktail</p>
        </div>
      </div>
    </div>
  )
}

export default Poison;