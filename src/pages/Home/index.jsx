// IMPORTS ========================================= //
import { useState } from 'react'
import { Link } from 'react-router-dom'

// DATA IMPORT ===================================== //
import hosting from '../../../public/data/logements.json' // JSON data

// COMPONENTS IMPORT =============================== //
import Hero from '../../components/Hero'

// STYLES IMPORT =================================== //
import scss from './home.module.scss';

// REACT COMPONENT ================================= //
const Home = () => {
    return (
    <main className={scss.pageHome}>
      <Hero>Chez vous, partout et ailleurs</Hero>      
      <section className={scss.HostingHome}>
        {hosting.map(({ cover, title, id }) => (
          <div className={scss.HostingHome__saperlipopette}>
            <figure>
              <Link to={`/property/${id}`}>
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
              </Link>
            </figure>
          </div>
          ))}
  
      </section>
    </main>
  )
}
export default Home
// END OF FILE ==================================== //