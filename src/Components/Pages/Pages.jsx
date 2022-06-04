import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route,Routes ,BrowserRouter,useLocation} from 'react-router-dom';
import {AnimatePresence}from 'framer-motion'
function Pages() {
  const location=useLocation()
  return (

    <AnimatePresence exitBeforeEnter>

    <Routes location={location} key={location.path}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:Params' element={<Cuisine/>}/>
      <Route path='/searched/:search' element={<Searched/>}/>
      <Route path='/recipe/:name' element={<Recipe/>}/>
      
    </Routes>
    
    </AnimatePresence>
    
  )
}

export default Pages