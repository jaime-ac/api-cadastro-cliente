import "./Home.css"
import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='container-home'>
        <Navbar />
        <div className="home-page">
          <div className="home-left"></div>
          <div className="home-right"></div>
        </div>
    </div>
  )
}

export default Home
