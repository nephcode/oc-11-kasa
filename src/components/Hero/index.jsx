import imgHero from "../../assets/images/hero.jpg";
import "./hero.module.scss";
const Hero = () => {
  return (
    <div className="hero">
      <img src={imgHero} alt="hero" />
    </div>
  );
};

export default Hero;