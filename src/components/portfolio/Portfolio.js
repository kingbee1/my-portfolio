import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Modern Dynamic Dashboard',
    git: 'https://github.com/kingbee1/dashboard',
    demo: 'https://missipi-dashboard.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Powerful Ai Website',
    git: 'https://github.com/kingbee1/barry-ai',
    demo: 'http://barry-ai.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Webpage About The Universe',
    git: 'https://github.com/kingbee1/discover',
    demo: 'http://discover-beta.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'To-do App',
    git: 'https://github.com/kingbee1/my-todo-app',
    demo: 'https://my-todo-app-xi.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Fashion Store Webpage',
    git: 'https://github.com/kingbee1/barry-store',
    demo: 'http://barry-store.vercel.app/'
  },
   {
    id: 6,
    image: IMG6,
    title: 'Weather App',
    git: 'https://github.com/kingbee1/weather-app',
    demo: 'https://kingbee1.github.io/weather-app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, git, demo})=> {
            return (
              <article key={id} className="portfolio__item">
                <div className={"portfolio__item-image"}>
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={git} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                  </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
