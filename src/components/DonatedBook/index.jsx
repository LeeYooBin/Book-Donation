import * as style from "./donated-book.module.scss";

const DonatedBook = ({ img, alt, description }) => (
  <div className={style.donated_book}>
    <img src={img} alt={alt} />
    <p>{description}</p>
  </div>
);

export default DonatedBook;