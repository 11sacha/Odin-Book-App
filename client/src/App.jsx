import { useState, useMemo } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage/homePage';
import LoginPage from './scenes/loginPage/loginPage';
import ProfilePage from './scenes/profilePage/profilePage';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme.js';


function App() {
  const mode = useSelector((state) => state.mod);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={ <LoginPage/> }/>
            <Route path='/home' element={ <HomePage/> }/>
            <Route path='/profile/:userId' element={ <ProfilePage/> }/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
