import React from 'react';
import { Navbar } from '../../components';
import { Chef, Footer, Gallery, Intro } from '../../container';

const About = () => {
  return (
    <>
      <Navbar />
      <div>home > about us</div>
      <div>Service customers over a decade</div>
      <div>Happy ours with us</div>
      <Intro />
      <Chef />
      <div>Happy customers</div>
      <Gallery />
      <Footer />
    </>
  )
}

export default About