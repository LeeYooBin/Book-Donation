import { Link } from "react-router-dom";
import * as style from "./header.module.scss";
import Logo from "../Logo";
import search from "../../assets/search-img.png";

const Header = () => (
  <header className={style.header}>
    <Logo />
    <nav>
      <Link to="/" className={style.link}>
        Início
      </Link>
      <Link to="/donated" className={style.link}>
        Livros Doados
      </Link>
      <Link to="/donate" className={style.link}>
        Quero Doar
      </Link>
    </nav>
    <label>
      <input type="text" placeholder="O que você procura?" />
      <img src={search} alt="Busca" />
    </label>
  </header>
);

export default Header;
