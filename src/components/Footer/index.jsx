import style from "./footer.module.scss";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => (
  <footer>
    <div className={style.contacts}>
      <p>4002-8922</p>
      <nav>
        <a href="#" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" target="_blank">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="#" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#" target="_blank">
          <img src={youtube} alt="Youtube" />
        </a>
        <a href="#" target="_blank">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </nav>
    </div>
    <div className={style.copyright}>
      <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
    </div>
  </footer>
);

export default Footer;
