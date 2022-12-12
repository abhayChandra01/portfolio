import React from "react";
import "../pages/pages.scss";

const Home = () => {
  return (
    <>
     
          <header>
            <div className="overlay">
              <div className="inner">
                <h2 className="title">Hello</h2>
                <p>
                I am
                <h4 className="name-font">
                  Abhay Chandra.
                </h4> 
                I am a
                <h4 className="profile-font"> Software Engineer</h4>
                at 
                <span className="company-font"><a href="https://www.xelpmoc.in" target="_blank" style={{textDecoration:'none'}}> Xelpmoc Design And Tech Ltd.</a></span>
                
                </p>
                <button className="btn" onClick={()=>window.open("https://github.com/abhayChandra01", "_blank")}>Projects</button>
              </div>
            </div>
          </header>


    </>
  );
};

export default Home;
