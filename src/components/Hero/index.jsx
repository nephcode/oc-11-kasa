import imgHero from "../../assets/images/hero.jpg";
import scssHero from "./hero.module.scss";

const Hero = ({ children }) => {
  return (
    <div className={scssHero.hero}>
      <img src={imgHero} alt="hero" />
      {children && <h1>{children}</h1>}
    </div>
  );
};

export default Hero;
