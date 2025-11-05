import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import POEI from './pages/POEI'
import Skilliacademy from './pages/Skilliacademy'
import FormationOPCO from './pages/FormationOPCO'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Skilliacademy />} />
        <Route path="/poei" element={<POEI />} />
        <Route path="/formation" element={<FormationOPCO />} />
      </Routes>
    </Router>
  )
}

export default App
