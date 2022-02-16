import React from 'react';
import { SubHeading } from '../../components';
import './FootAndBeer.css';
import { images } from '../../constants';

const FootAndBeer = () => {
  return (
    <div className="app__foodandbeer app__bg app__wrapper section__padding">
      <div className="app__wrapper_img">
        <img src={ images.beer02 } alt="beer 2" />
      </div>
      <div className="app__wrapper_info">
        <div className="app__wrapper_info_img" style={{ marginBottom: "2rem", marginTop: "2rem" }}>
          <img src={ images.beer01 } alt="beer 1" />
        </div>
        <SubHeading title="About us" />
        <h1 className="headtext__cormorant">Food, Drinks, Entertainment In One</h1>
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button" style={{ marginTop: "2rem" }}>Know more</button>
      </div>
    </div>
  )
}

export default FootAndBeer;