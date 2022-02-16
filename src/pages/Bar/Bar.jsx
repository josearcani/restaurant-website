import React from 'react';
import { Navbar } from '../../components';
import { BookTable, FindUs, Footer, HeaderBar, SpecialMenu } from '../../container';
import FootAndBeer from '../../container/FoodAndBeer/FootAndBeer';
import HappyHours from '../../container/HappyHours/HappyHours';


const Bar = () => {
  return (
    <>
      <Navbar />
      <HeaderBar />
      <BookTable />
      <FootAndBeer />
      <div>What is your poison</div>
      <HappyHours />
      <SpecialMenu />
      <FindUs />
      <Footer />
    </>
  )
}

export default Bar