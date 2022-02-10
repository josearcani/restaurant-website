import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bar from '../pages/Bar/Bar';
import Home from '../pages/Home/Home';
import './Wrapper.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/bar-home" element={ <Bar /> } />
      </Routes>
    </BrowserRouter>
  )
}