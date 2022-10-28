import React from "react";
import "../pages/pages.scss";

const Home = () => {
  return (
    <>
      {/* <div>
        <div className="home-head">
          <h1>Hello</h1>
        </div>
        <div className="about-content">
          <p>
          I’m Kirtiranjan Maharana, I am a Web Developer (Frontend developer)
          based in Bangalore.
          </p>
        </div>
      </div> */}

{/* <div className="navbar">
        <div className="menu">
          <h3 className="logo">Mayank<span>Rana</span></h3>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div> */}

      {/* <div className="main-container">
        <div className="main"> */}
          <header>
            <div className="overlay">
              <div className="inner">
                <h2 className="title">Hello</h2>
                <p>
                I’m Kirtiranjan Maharana, I am a Web Developer (Frontend developer) based in Bangalore.
                </p>
                <button className="btn" onClick={()=>window.open("https://github.com/KirtiranjanMaharana", "_blank")}>Projects</button>
              </div>
            </div>
          </header>
        {/* </div>
        </div> */}



    </>
  );
};

export default Home;
