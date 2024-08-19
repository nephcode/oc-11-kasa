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
      <Hero />
      <h1>KAZA</h1>
      <h1 className="home_title">Chez vous, partout et ailleurs</h1>
      <p><Link to="/property/c67ab8a7">Lien de démo non Dynamique "c67ab8a7"</Link></p>
      <p><Link to="/zfozeoirjji">Lien de démo page 404 "zfozeoirjji"</Link></p>
      <p>Underconstruction</p>
      <section className={scss.HostingHome}>
        {hosting.map(({ cover, title, id }) => (
          <div className={scss.HostingHome__saperlipopette}>
            <Link to={`/property/${id}`}>
              <figure>
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
              </figure>
            </Link>
          </div>
          ))}
  
      </section>
    </main>
  )
}
export default Home
// END OF FILE ==================================== //