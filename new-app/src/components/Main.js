import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Home.js'

const Main = () => (
  <main>
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      
    </BrowserRouter>
  </main>
)

export default Main

