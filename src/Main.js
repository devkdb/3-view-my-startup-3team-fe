import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './components/Nav/index.jsx'
import Footer from './components/Footer/index.jsx'

function Main() {
  return (
    <>
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}

export default Main;