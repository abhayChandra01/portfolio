import React from "react";
import "../pages/pages.scss";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Work = () => {
  return (
    <>
      <div>
      {/* <div className="overlay">
      <div className="inner">
        <div className="about-head">
          <h1>About my work</h1>
        </div>
        <div className="about-content">
          <p>
            I work with forward-thinking people to design and build interactive,
            accessible websites and products. I'm Working as a Frontend Developer at Xelpmoc Design and Tech.
          </p> 
      </div>

      </div>
      </div> */}

      <div className="about-head">
          <h1>Where i've worked</h1>
        </div>

        <div className="work-details">
      <VerticalTimeline>

        <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov-2022 - Present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">SDE - Frontend</h3>
    <h4 className="vertical-timeline-element-subtitle">Xelpmoc Design and Tech</h4>
    <p>
     <ul> 1. Developed and maintained code for in-house and client websites primarily using React, Redux-toolkit, JavaScript, and Material Ui, Tailwind CSS.</ul>
     <ul> 2. Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</ul>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jul 2022 - Oct-2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">SDE-(Intern) - Frontend</h3>
    <h4 className="vertical-timeline-element-subtitle">Xelpmoc Design and Tech</h4>
    <p>
     {/* <ul> 1. Developed and maintained code for in-house and client websites primarily using React, Redux-toolkit, JavaScript, and Material Ui, Tailwind CSS.</ul>
     <ul> 2. Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</ul> */}
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
      </div>

      </div>
      

    </>
  );
};

export default Work;
