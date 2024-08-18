// IMPORTS ========================================= //
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <p><Link to="/property/10">Lien de démo non Dynamique "Propriété 10"</Link></p>
      <p>Underconstruction</p>

    </main>
  )
}
export default Home
// END OF FILE ==================================== //