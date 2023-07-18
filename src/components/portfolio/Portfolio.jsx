import React from 'react'
import './portfolio.css'
import Bounse from '../../assets/Bounse.jpg'
import NITRIMUN from '../../assets/NITRIMUN-Home.png'
import NITRBLOG from '../../assets/NITR-Blog.png'
import MARKALL from '../../assets/MARKALL.png'
import VIDEOGENERATOR from '../../assets/Video-Generator.png'
import VIDEOCALL from '../../assets/1one1Video.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: Bounse,
    title: 'BounSe - WebApp for my college where students can sell their old porducts.',
    github: "https://github.com/iqbalcodes6602/bounse",
    demo: "https://github.com/iqbalcodes6602/bounse"
  },
  {
    id: 2,
    image: NITRIMUN,
    title: 'NITR IMUN - Website for International Model United Nations, with payment mechanism.',
    github: "https://github.com/adnitr/nitrimun-website",
    demo: "https://nitrimun.com/",
  },
  {
    id: 3,
    image: NITRBLOG,
    title: 'Blogging website for college students where they can share their journey and much more.',
    github: "https://github.com/iqbalcodes6602/nitrblog",
    demo: "https://nitrblog.000webhostapp.com/"
  },
  {
    id: 4,
    image: MARKALL,
    title: 'NEXTJS Landing Page for SchoolHype Co. with emailing features.',
    github: "https://github.com/iqbalcodes6602/schoolHype",
    demo: "https://wonderful-meerkat-f3d442.netlify.app/"
  },
  {
    id: 5,
    image: VIDEOGENERATOR,
    title: 'Generates video with given text by user and language input customisation helps in overlaying text on video.',
    github: "https://github.com/iqbalcodes6602/phpVideoGenerator",
    demo: "https://github.com/iqbalcodes6602/phpVideoGenerator"
  },
  {
    id: 6,
    image: VIDEOCALL,
    title: 'Real time video calling webapp with WebRTC and REACTJS',
    github: "https://github.com/iqbalcodes6602/1v1videoCalling",
    demo: "https://github.com/iqbalcodes6602/1v1videoCalling"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <div  data-aos="fade-up" >
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio