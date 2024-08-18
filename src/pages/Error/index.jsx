import error from './error.module.scss';
import Error404 from '../../assets/images/error-404.jpg'; 
const NotFound = () => {
    return (
        <div>
            <img src={Error404} alt="404" />
            <p className={error.error}>404 Oups! la page que vous demandez n'existe pas</p>    
        </div>
    )
}

export default NotFound