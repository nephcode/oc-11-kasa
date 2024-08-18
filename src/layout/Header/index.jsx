import { Link } from "react-router-dom";
import header from "./header.module.scss";
import NavBar from "../../components/Navbar";
import logoHeader from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className={header.logo}>
        <Link to="/">
          <img src={logoHeader} alt="logo officiel" />
        </Link>
      </div>
      <div>
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
