import "./style.css";
import senaiLogo from "../../../assets/img/senai_logo.svg";

export const SectionLogin = () => {
  return (
    <section className="section-login">
      <div className="container-login">
        <img src={senaiLogo} alt="" />

        <h3>Faça seu login!</h3>
        <div>
          <form className="form-login">
            <input type="text" placeholder="CPF ou ID" />
            <input type="text" placeholder="Senha" />
          </form>
        </div>
        <div className="card-action">
          <button className="btn-login">ENTRAR</button>
          <p>Esqueceu a senha?</p>
        </div>
      </div>
    </section>
  );
};
