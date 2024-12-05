import * as style from "./home.module.scss";
import { v4 as uuidv4 } from "uuid";
import HomeBanner from "../../components/HomeBanner";
import ReasonCard from "../../components/ReasonCard";
import cardImg1 from "../../assets/card1-img.png";
import cardImg2 from "../../assets/card2-img.png";
import cardImg3 from "../../assets/card3-img.png";
import cardImg4 from "../../assets/card4-img.png";

const cards = [
  {
    id: uuidv4(),
    img: cardImg1,
    alt: "Razão 1",
    text: "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
  },
  {
    id: uuidv4(),
    img: cardImg2,
    alt: "Razão 2",
    text: "Estimula o hábito da leitura e o aprendizado contínuo.",
  },
  {
    id: uuidv4(),
    img: cardImg3,
    alt: "Razão 3",
    text: "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
  },
  {
    id: uuidv4(),
    img: cardImg4,
    alt: "Razão 4",
    text: "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
  },
];

const Home = () => (
  <main className={style.main}>
    <HomeBanner />
    <section className={style.reasons}>
      <h2>Por que devo doar?</h2>
      <div>
        {cards.map((item) => (
          <ReasonCard key={item.id} img={item.img} text={item.text} />
        ))}
      </div>
    </section>
  </main>
);

export default Home;
