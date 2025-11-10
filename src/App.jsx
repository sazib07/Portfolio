import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'


const App = () => (
  <>
    <Header/>
    <Banner />
    <Clients />
    <Products />
    <SliderComponent/>
    <Login />
    <Footer />
  </>
)
export default App
