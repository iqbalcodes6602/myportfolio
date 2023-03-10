import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FaUniversity } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import CTA from '../header/CTA'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div data-aos="fade-right" className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div data-aos="fade-left" className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Work Experiences</small>
            </article>

            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>College</h5>
              <small>NIT&nbsp;Rourkela Industrial&nbsp;Design</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Hey there, web wanderer! I'm Anas Iqbal, a software sorcerer and web wizard who can whip up some MERN and WAMP magic. When I'm not crafting code, I love dabbling in the mystical arts of UI/UX design. Come take a peek at my portfolio and let's conjure up something awesome together!
          </p>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About