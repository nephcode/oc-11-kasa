import { Link } from "react-router-dom";
import scssHeader from "./header.module.scss";
import NavBar from "../../components/Navbar";
import logoHeader from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className={scssHeader.logo}>
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
