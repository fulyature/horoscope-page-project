import logo from "../../helper/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#horoscope" className="">
          Horoscope
        </a>
        <a href="#daily" className="">
          Daily
        </a>
        <a href="#tarot" className="">
          Tarot
        </a>
        <a href="#article" className="">
          Article
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </div>
    </div>
  );
};
export default Navbar;
