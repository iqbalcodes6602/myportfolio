import React from 'react'
import './services.css'
import { FaCheck } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <div data-aos="fade-right" >
          <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Designing intuitive and engaging user interfaces for web and mobile.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Creating wireframes, prototypes, and mockups to bring ideas to life.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>In-depth understanding of typography, color theory, and layout principles.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Conducting user research and usability testing to inform design decisions</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Using tools like Sketch, Figma, and Adobe Creative Suite to design and iterate.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Collaborating closely with development teams to ensure seamless implementation.</p>
              </li>
            </ul>
          </article>
        </div>
        {/* END OF UI/UX */}

        <div data-aos="fade-down" >
          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Crafting stunning websites with MERN stack technology.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Passionate about open source and community-driven development.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Building robust backend solutions with PHP and MySQL.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Seamlessly integrating frontend and backend to deliver exceptional experiences.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Expertise in DevOps and deployment for efficient web development workflows.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Innovative problem-solver and avid learner of new technologies.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Driven to create impactful and user-centered web experiences.</p>
              </li>
            </ul>
          </article>
        </div>
        {/* END OF WEB DEVELOPMENT */}

        <div data-aos="fade-left">
          <article className='service'>
            <div className='service__head'>
              <h3>Problem Solving</h3>
            </div>

            <ul className='service__list'>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Analyzing complex problems and breaking them down into smaller, manageable components.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Implementing efficient algorithms to optimize performance and scalability</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Experience in using data structures like arrays, trees, graphs, and hash maps.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Ability to identify and resolve common algorithmic problems like sorting and searching.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Strong debugging skills to quickly identify and fix code issues.</p>
              </li>
              <li>
                <FaCheck className='service__list-icon' />
                <p>Continuous learning and staying updated with the latest trends in algorithmic problem-solving.</p>
              </li>
            </ul>
          </article>
        </div>
        {/* END OF CONTENT CREATION */}
      </div>

    </section>
  )
}

export default Services