import * as style from "./form-input.module.scss";

const FormInput = ({ placeholder }) => (
  <input type="text" className={style.form_input} placeholder={placeholder} />
);

export default FormInput;
