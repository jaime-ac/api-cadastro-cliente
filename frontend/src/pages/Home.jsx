import "./Home.css"
import React from 'react'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div className='container-home'>

      <div className="header-home">

        <div className="header-logo">

          <label htmlFor="" className="nome-empresa">Black Hair</label>

        </div>

        <div className="header-social-midia">

          <buuton className="header-midia-button"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images"/></buuton>
          <buuton className="header-midia-button"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images"/></buuton>
          <buuton className="header-midia-button"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images"/></buuton>
          <buuton className="header-midia-button"><img src="./public/icons/icon-x.svg" alt="" className="midia-images"/></buuton>
          
        </div>

      </div>

      <div className="navbar-home">
        <Navbar />
      </div>

      <div className="main-home">

      </div>

      <div className="footer-home">

      </div>
        
    </div>
  )
}

export default Home
