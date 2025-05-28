import "./Service.css"
import React from 'react'
import Navbar from '../components/Navbar'

function Service() {
  return (
    <div className='container-service'>

      <div className="header-service">

        <div className="header-logo">

          <label htmlFor="" className="nome-empresa">Black Hair</label>

        </div>

        <div className="header-social-midia">

          <buuton className="header-midia-button-service"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images-service"/></buuton>
          <buuton className="header-midia-button-service"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images-service"/></buuton>
          <buuton className="header-midia-button-service"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images-service"/></buuton>
          <buuton className="header-midia-button-service"><img src="./public/icons/icon-x.svg" alt="" className="midia-images-service"/></buuton>
          
        </div>

      </div>

      <div className="navbar-service">
        <Navbar />
      </div>

      <div className="main-service">

      </div>

      <div className="footer-service">

      </div>

    </div>
  )
}

export default Service
