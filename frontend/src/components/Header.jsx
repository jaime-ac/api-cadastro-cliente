import React from 'react'

function Header() {
  return (
    <div className='container-header'>

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
      
    </div>
  )
}

export default Header
