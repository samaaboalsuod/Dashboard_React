import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Categories from './Pages/Categories';

const RoutingApp = () => {
    return ( <>
    
    <BrowserRouter>
       <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Messages' element={<Messages />} />
          <Route path='/Categories' element={<Categories />} />


          {/* <Route path='*' element={<Error />} /> */}

       </Routes>
    </BrowserRouter>

    </> );
}
 
export default RoutingApp;