import React from 'react';
import { BookTable, Footer, HappyHours } from '../../container';

import { Navbar } from '../../components';

const Services = () => {
  return (
    <>
      <Navbar />
      <div>home > our services</div>
      <div>Serving quality</div>
      <div>bar menu - food menu - desserts menu</div>
      <BookTable />
      <HappyHours />
      <Footer />
    </>
  )
}

export default Services;