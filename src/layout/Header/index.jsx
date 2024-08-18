import header from './header.module.scss';
import { Link } from 'react-router-dom';
import logoHeader from '../../assets/images/logo-footer.svg';
const Header = () => {
    return (
        <header>
        <div className="logo"><img src={logoHeader}  alt="logo officiel" /></div>    
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link href="/About">A propos</Link></li>
                    
                </ul>
            </nav>
        </div>
        </header>
    );
    }
    export default Header;
