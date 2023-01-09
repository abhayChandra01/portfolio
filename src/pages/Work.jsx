import React from "react";
import "../pages/pages.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Work = () => {
  return (
    <>
      <div>

        <div className="about-head">
          <h1>Where i've worked</h1>
        </div>

        <div className="work-details">
          <VerticalTimeline>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Dec-2022 - Present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Xelpmoc Design And Tech Ltd.</h4>
              <h5>Bangalore</h5>
              <p>
                <ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /> </svg>

                  Developed and maintained code for in-house and client websites primarily using Next.js, React.js, Redux.js toolkit, JavaScript, and Material UI, Tailwind CSS.</ul>
                <ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /> </svg>

                  Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Aug 2022 - Dec-2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Xelpmoc Design And Tech Ltd.</h4>
              <h5>Bangalore</h5>
              <p>
                <ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /> </svg>

                  Worked on an US-based industry-level project built in React.js and also used Redux.js toolkit. Also, developed features from the scratch, unit tested & delivered within the deadline.</ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jan 2022 - Mar-2022"
              iconStyle={{ background: 'rgb(255, 181, 71)', color: '#fff' }}
            // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Aurbitus</h4>
              <h5>Gwalior</h5>
              <p>
                <ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /> </svg>

                  Built a MERN Stack Project from scratch for a MLM-based client Service Point India (SPI), with an E-Commerce layout, also lead the team of 2 members & have hands on experience on React.js & Node.js.</ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="July 2021 - Nov-2021"
              iconStyle={{ background: 'rgb(60, 179, 113)', color: '#fff' }}
            // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Numeric Infosystem Pvt. Ltd.</h4>
              <h5>Gwalior</h5>
              <p>
                <ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"> <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /> </svg>

                  Built Student Marksheet Management System & Product Management System using Node.js.</ul>
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>

      </div>


    </>
  );
};

export default Work;
