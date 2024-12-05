import { Link } from "react-router-dom";
import * as style from "./logo.module.scss";
import img from "../../assets/logo-image.png";

const Logo = () => (
  <Link to="/" className={style.logo}>
    <img src={img} alt="Logo" />
    <h1>Livros Vai na Web</h1>
  </Link>
);

export default Logo;
