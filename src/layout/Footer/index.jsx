import footer from "./footer.module.scss";
import logoFooter from "../../assets/images/logo-footer.svg";
const Footer = () => {
  return (
    <footer>
      <div className="logo"><img src={logoFooter}  alt="logo officiel" /></div>
      <p>Kasa OC-11 © 2024 Youcodeuse</p>
    </footer>
  );
};
export default Footer;
