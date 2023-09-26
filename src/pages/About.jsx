import React from "react";
import "../pages/pages.scss";

const About = () => {
  return (
    <>
      {/* <div> */}

      <header>
        <div className="about-overlay">
          <div className="about-inner">
            <div className="about-head">
              <h1>About me</h1>
            </div>
            <div className="about-content">
              <div className="about-ki col-sm-6 col-md-7">
                <div className="about-info">
                  <p>
                    <span className="title-s">Name: </span>{" "}
                    <span>Abhay Chandra</span>
                  </p>
                  <p>
                    <span className="title-s">Profile: </span>{" "}
                    <span>Software Engineer</span>
                  </p>
                  <p>
                    <span className="title-s">Email: </span>{" "}
                    <span>a4abhaychandra@gmail.com</span>
                  </p>
                </div>
              </div>
              <p className="about-p">
                I belong to Shahjahanpur, Uttar Pradesh. I did my schooling from CBSE Board & completed my Bachelor Of Technology from ITM Gwalior in the field of Information Technology. <br />
                I am a passionate developer seeking a challenging position in a renowned organization that values learning, growth, and innovation, so that I can expand my skillset. <br />
                Proficient in React JS. <br />
                As a highly self-motivated web developer, I thrive on building web applications and continuously expanding my skills with the latest technologies to create meaningful and innovative solutions.
              </p>

              {/* <div >
            <p className="about-tech">Here are a few technologies I’ve been working with recently:</p>
            <ol className="about-bool">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Material Ui</li>
              <li>Tailwind CSS</li>
              <li>Rest Api</li>
            </ol>
          </div>*/}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
