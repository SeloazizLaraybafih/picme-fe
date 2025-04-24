import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tes from './pages/Tes'
import Sendpic from './pages/SendPic'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/tes' element={<Tes />} />
    <Route path='/sendpic' element={<Sendpic />} />
  </Routes>
)

export default AppRoutes
