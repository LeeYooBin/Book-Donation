import * as style from "./donate.module.scss";
import FormInput from "../../components/FormInput";

const Donate = () => {
  return (
    <main className={style.donate}>
      <h1>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h1>
      <form>
        <h2>Informações do Livro</h2>
        <FormInput placeholder={"Nome"} />
        <FormInput placeholder={"Categoria"} />
        <FormInput placeholder={"Autor"} />
        <FormInput placeholder={"Link da Imagem"} />
        <button type="submit" disabled>Doar</button>
      </form>
    </main>
  );
};

export default Donate;
