import React from 'react';
import { Navbar } from '../../components';
import { BookTable, FindUs, Footer, HeaderBar, SpecialMenu, FootAndBeer, HappyHours, Poison } from '../../container';

const Bar = () => {
  return (
    <>
      <Navbar />
      <HeaderBar />
      <BookTable />
      <FootAndBeer />
      <Poison />
      <HappyHours />
      <SpecialMenu />
      <FindUs />
      <Footer />
    </>
  )
}

export default Bar