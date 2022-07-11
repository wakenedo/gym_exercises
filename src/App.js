import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Pages
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';


function App() {
  return (
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />

      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
