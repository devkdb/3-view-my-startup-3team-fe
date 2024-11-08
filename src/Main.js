import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './components/Nav/index.jsx'
import Footer from './components/Footer/index.jsx'

function Main() {
  return (
    <>
      <Nav />
      <div><Outlet /></div>
      <Footer />
    </>
  )
}

export default Main;