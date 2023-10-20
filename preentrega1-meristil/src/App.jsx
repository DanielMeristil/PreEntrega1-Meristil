import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import CardWidget from './components/CardWidget/CardWidget'


function App() {
      

  const greeting = "Bienvenid@ a espacio glamour salon de belleza";
  return (
    <>
    <CardWidget/>
  <NavBar/>
  <ItemsListContainer mensaje={greeting}/> 
  
    </>
  )
}

export default App
