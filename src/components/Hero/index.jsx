import imgHero from "../../assets/images/hero.jpg";
import scssHero from "./hero.module.scss";

const Hero = ({ children }) => {
  return (
    <section className={scssHero.hero} id={`slider`}>
      <img src={imgHero} alt="hero" />
      {children && <h1>{children}</h1>}
    </section>
  );
};
export default Hero;