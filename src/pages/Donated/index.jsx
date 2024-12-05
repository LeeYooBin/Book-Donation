import { v4 as uuidv4 } from "uuid";
import * as style from "./donated.module.scss";
import DonatedBook from "../../components/DonatedBook";
import book from "../../assets/book.jpeg";

const bookMock = {
  id: uuidv4(),
  img: book,
  alt: "book",
  description: "O protagonista Susanne Andrade Ficção",
};

const Donated = () => (
  <main className={style.donated}>
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
    <DonatedBook
      img={bookMock.img}
      alt={bookMock.alt}
      description={bookMock.description}
    />
  </main>
);

export default Donated;
