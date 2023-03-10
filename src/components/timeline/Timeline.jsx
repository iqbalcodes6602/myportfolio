import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool, FaUsers, FaUniversity } from 'react-icons/fa'

function Timeline() {
    return (
        <VerticalTimeline lineColor={"var(--color-primary)"}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "var(--color-bg-variant)" }}
                contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                date="2023"
                iconStyle={{ background: 'black', color: 'var(--color-bg-variant)' }}
                icon={<FaBriefcase className="about__icon" />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-primary)" }}>Intern at Etechmy</h3>
                <h4 className="vertical-timeline-element-subtitle"><b>New Delhi, India</b></h4>
                <p>
                    Web Developer intern at Etechmy. Based on Laravel, PHP, Mysql.
                    Had to develop admin dashboard. Complete authentication system.
                    Working on building APIs, for frontend developers
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "var(--color-bg-variant)" }}
                contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                date="2023"
                iconStyle={{ background: 'black', color: 'var(--color-bg-variant)' }}
                icon={<FaBriefcase className="about__icon" />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-primary)" }}>Inter at Psyber</h3>
                <h4 className="vertical-timeline-element-subtitle"><b>New Delhi, India</b></h4>
                <p>
                    Web Developer intern at Psyber . Full stack development intership
                    of WAMP stack. Making APIs which such as video generator for user
                    pages.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "var(--color-bg-variant)" }}
                contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                date="2022"
                iconStyle={{ background: 'black', color: 'var(--color-bg-variant)' }}
                icon={<FaUsers className="about__icon" />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-primary)" }}>Member Of WebWiz</h3>
                <h4 className="vertical-timeline-element-subtitle"><b>NIT, Rourkela</b></h4>
                <p>
                    A member of WebWiz technical club of our college. A Web Development club.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "var(--color-bg-variant)" }}
                contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                date="2021"
                iconStyle={{ background: 'black', color: 'var(--color-bg-variant)' }}
                icon={<FaUniversity className="about__icon" />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-primary)" }}>Student</h3>
                <h4 className="vertical-timeline-element-subtitle"><b>NIT, Rourkela</b></h4>
                <p>
                    A full time student at National Institute of Technology, Rourkela. 
                    Doing Bachelors of Technology in Industrial Design. 
                    Covering Subjects like Desing Thinking, Visual Design, UI/UX and many more. 
                    With current CGPA oF 8.5
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "var(--color-bg-variant)" }}
                contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                date="2020"
                iconStyle={{ background: 'black', color: 'var(--color-bg-variant)' }}
                icon={<FaSchool className="about__icon" />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-primary)" }}>Student</h3>
                <h4 className="vertical-timeline-element-subtitle"><b>Montofort Inter College, Lucknow</b></h4>
                <p>
                    Completed Senior Secondary Education in Physics, Chemistry and Mathematics from
                    Montfort Inter College. Passed in flying colors with percentage of 94%.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "var(--color-bg-variant)" }}
                contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                date="2018"
                iconStyle={{ background: 'black', color: 'var(--color-bg-variant)' }}
                icon={<FaSchool className="about__icon" />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-primary)" }}>Student</h3>
                <h4 className="vertical-timeline-element-subtitle"><b>Montofort Inter College, Lucknow</b></h4>
                <p>
                    Completed High School in Physics, Chemistry and Mathematics from
                    Montfort Inter College. Passed in flying colors with percentage of 96%.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline