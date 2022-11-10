import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/theme.png'
import IMG2 from '../../assets/collapsing.png'
import IMG3 from '../../assets/localization.png'


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const notify = () => {
  // Calling toast method by passing string
  toast('Not release yet!')
}
const loading = () => {
  // Calling toast method by passing string
  toast('Loading...')
}

const data = [
  {
    id: 1,
    image: IMG1,
    titile: 'Change Theme Color',
    github: 'https://github.com/senghuyjr11/ThemeColor.git',
    demo: notify
  },
  {
    id: 2,
    image: IMG2,
    titile: 'Collapsing Profile Image',
    github: 'https://github.com/senghuyjr11/CollapsingProfileImage.git',
    demo: notify
  },
  {
    id: 3,
    image: IMG3,
    titile: 'Localization',
    github: 'https://github.com/senghuyjr11/Localization.git',
    demo: notify
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, titile, github, demo}) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={titile} />
                </div>
                <h3>{titile}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <button onClick={demo} className='btn btn-primary' >Demo</button>
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