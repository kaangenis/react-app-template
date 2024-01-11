import React from 'react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Home from './routes/Home/Home';

export default function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </>
  )
}