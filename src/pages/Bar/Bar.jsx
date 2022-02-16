import React from 'react';
import { Navbar } from '../../components';
import { BookTable, FindUs, Footer, HeaderBar, SpecialMenu } from '../../container';
import HappyHours from '../../container/HappyHours/HappyHours';


const Bar = () => {
  return (
    <>
      <Navbar />
      <HeaderBar />
      <BookTable />
      <div>Foot drinks entertainment in one</div>
      <div>What is your poison</div>
      <HappyHours />
      <SpecialMenu />
      <FindUs />
      <Footer />
    </>
  )
}

export default Bar