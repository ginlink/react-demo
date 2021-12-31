import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Process from './pages/Process'

import Header from './component/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/process" element={<Process />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}

export default App
