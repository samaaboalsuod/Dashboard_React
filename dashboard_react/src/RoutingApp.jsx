import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Categories from './Pages/Categories';
import ProjectEdit from './Pages/ProjectEdit';
import TestAPI from './Pages/TestAPI';
import PagesList from './Pages/PagesList';
import Login from './Pages/Login';

const RoutingApp = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Messages' element={<Messages />} />
                <Route path='/Categories' element={<Categories />} />
                <Route path='/Categories/:id' element={<Categories />} />
                
                {/* FIX 1: Route for Creating (No ID) */}
                <Route path='/ProjectEdit' element={<ProjectEdit />} />
                
                {/* FIX 2: Route for Editing (With ID) */}
                <Route path='/ProjectEdit/:id' element={<ProjectEdit />} />

                <Route path='/PagesList' element={<PagesList />} />
                <Route path='/Login' element={<Login />} />

                {/* FIX 3: Added missing slash for TestAPI parameter */}
                <Route path='/TestAPI/:id' element={<TestAPI />} />

                {/* <Route path='*' element={<Error />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RoutingApp;