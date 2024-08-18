import { Link } from 'react-router-dom';
import header from './header.module.scss';
import NavBar from '../../components/Navbar';
import logoHeader from '../../assets/images/logo.svg';
const Header = () => {
    return (
        <header>
        <div className={header.logo}><img src={logoHeader}  alt="logo officiel" /></div>    
        <div>
            <NavBar/>
        </div>
        </header>
    );
    }
    export default Header;
