import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bar from '../pages/Bar/Bar';
import Home from '../pages/Home/Home';
import './Wrapper.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bar-home" element={ <Bar /> } />
        <Route path="/contact-us" element={ <Bar /> } />
        <Route path="/about-us" element={ <Bar /> } />
        <Route path="/services" element={ <Bar /> } />
        <Route path="/faq" element={ <Bar /> } />
        <Route path="/comming-soon" element={ <Bar /> } />
        <Route path="/error" element={ <Bar /> } />
        <Route path="/chefs" element={ <Bar /> } />
        <Route path="/blog" element={ <Bar /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}