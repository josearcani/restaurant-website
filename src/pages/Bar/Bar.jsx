import React from 'react';
import { Navbar } from '../../components';
import { AboutUs, Chef, FindUs, Footer, Gallery, HeaderBar, Intro, Laurels, SpecialMenu } from '../../container';


const Bar = () => {
  return (
    <>
      <Navbar />
      <HeaderBar />
      <div>Book a table</div>
      <div>Foot drinks entertainment in one</div>
      <div>What is your poison</div>
      <div>Happy hours</div>
      <SpecialMenu />
      <FindUs />
      <Footer />
    </>
  )
}

export default Bar