

import React from 'react'
import Navbar from './compo/Navbar'
import Contact from './compo/Contact'
import About from './compo/About'
import Home from './compo/Home'
import { Routes ,Route} from 'react-router-dom'



export default function App() {
  return (
    <div>
      <Navbar/>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>


</Routes>


  
    </div>
  )
}

