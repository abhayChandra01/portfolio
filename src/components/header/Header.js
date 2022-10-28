import React from 'react'
import "./header.scss"
import logo from "../../images/K-logo.ico";


const Header = ({ active, setActive }) => {
  return (
    <>
     <div className='header'>
            <div className="header__content">
                <div className="logo">
                <img className='img' src={logo} alt="Logo" />
                </div>
                <div
                    className={`menu-toggle ${active ? 'active' : ''}`}
                    onClick={() => setActive(!active)}
                >
                    <i className='bx bx-menu'></i>
                    <i className='bx bx-x'></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
