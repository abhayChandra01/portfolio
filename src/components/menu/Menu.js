import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menu.scss'

const Menu = ({ active, setActive }) => {
    const location = useLocation()

    useEffect(() => {
        setActive(false)
    }, [location])

    return (
        <>
       

        {/* <div className="container">
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">Mayank<span>Rana</span></h3>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay">
              <div className="inner">
                <h2 className="title">Click on NavBar icon</h2>
                <p>
                  In this project I try to make a 3D navbar animation you can check it out by clicking on the nav bar icon on ther top right corner.
                </p>
                <button className="btn">Read more</button>
              </div>
            </div>
          </header>
        </div>

        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div> */}

      {/* <div className="links">
        <ul>
          <li>
            <a href="#" style="--i: 0.05s;">Home</a>
          </li>
          <li>
            <a href="#" style="--i: 0.1s;">Services</a>
          </li>
          <li>
            <a href="#" style="--i: 0.15s;">Portfolio</a>
          </li>
          <li>
            <a href="#" style="--i: 0.2s;">Testimonials</a>
          </li>
          <li>
            <a href="#" style="--i: 0.25s;">About</a>
          </li>
          <li>
            <a href="#" style="--i: 0.3s;">Contact</a>
          </li>
        </ul>
      </div> */}

<div className="links">
        <ul className={`menu ${active ? 'active' : ''}`}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/work">Work</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>

       
        </div>

    {/* </div> */}

        </>

    )
}

export default Menu