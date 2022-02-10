import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Bar,
  Blog,
  Chefs,
  Contact,
  Error404,
  Faq,
  Home,
  Services,
  Soon,
} from '../pages';
import './Wrapper.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/bar-home" element={ <Bar /> } />
        <Route exact path="/contact-us" element={ <Contact /> } />
        <Route exact path="/about-us" element={ <About /> } />
        <Route exact path="/services" element={ <Services /> } />
        <Route exact path="/faq" element={ <Faq /> } />
        <Route exact path="/comming-soon" element={ <Soon /> } />
        <Route exact path="/chefs" element={ <Chefs /> } />
        <Route exact path="/blog" element={ <Blog /> } />
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/*" element={ <Error404 /> } />
      </Routes>
    </BrowserRouter>
  )
}