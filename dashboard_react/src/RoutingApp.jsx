import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const RoutingApp = () => {
    return ( <>
    
    <BrowserRouter>
       <Routes>

          <Route path='/' element={<Home />} />



          {/* <Route path='*' element={<Error />} /> */}

       </Routes>
    </BrowserRouter>

    </> );
}
 
export default RoutingApp;