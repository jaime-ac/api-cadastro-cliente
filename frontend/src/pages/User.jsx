import React from 'react'
import "./User.css"

function User() {
  return (
    <div className='container-user'>

        <div className="header">

            <div className="header-logo">

                <label htmlFor="" className="nome-empresa">Black Hair</label>

            </div>

            <div className="header-social-midia">

                <button className="header-midia-button"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images"/></button>
                <button className="header-midia-button"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images"/></button>
                <button className="header-midia-button"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images"/></button>
                <button className="header-midia-button"><img src="./public/icons/icon-x.svg" alt="" className="midia-images"/></button>
            
            </div>
        </div>

        <div className="main-user">

            <div className="main-user-left"></div>
            <div className="main-user-right"></div>

        </div>

        <div className="footer">

        </div>
      
    </div>
  )
}

export default User
