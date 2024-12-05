import * as style from "./reason-card.module.scss";

const ReasonCard = ({ img, alt, text }) => (
  <div className={style.card}>
    <img src={img} alt={alt} />
    <p>{text}</p>
  </div>
);

export default ReasonCard;