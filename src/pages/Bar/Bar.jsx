import React from 'react';
import { Navbar } from '../../components';
import { BookTable, FindUs, Footer, HeaderBar, SpecialMenu } from '../../container';


const Bar = () => {
  return (
    <>
      <Navbar />
      <HeaderBar />
      <BookTable />
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