// IMPORT COMPONENTS =============================== //
import { Link } from 'react-router-dom';

// STYLES IMPORT =================================== //
import scss from './error.module.scss';

// ASSETS IMPORT =================================== //
import Error404 from '../../assets/images/error-404.jpg'; 

// REACT COMPONENT ================================ //
const NotFound = () => {
    return (
        <main id="page-error" data-target="page-error" className={scss.pageError}>
            <img src={Error404} alt="404" />
            <p className={scss.error}>404 Oups! la page que vous demandez n'existe pas</p> 
            <p className={scss.error}><Link to="/">Retourner à l'accueil</Link></p>    
         
        </main>
    )
}

export default NotFound
// END OF FILE =================================== //