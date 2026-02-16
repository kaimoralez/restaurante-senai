import "./style.css";
import logoSenai from "../../assets/img/senai-logo-menu.svg";
import userIcon from "../../assets/img/user-menu.svg";

export const Header = () => {
  return (
    <header>

        <img className="logo-senai-nav" src={logoSenai} alt="logo-senai"/>
    
        <nav className="nav-header">
          <ul className="list-nav-header">
            <li className='item-list-nav'>INÍCIO</li>
            <li className='item-list-nav'>CARDÁPIO</li>
            <li className='item-list-nav'>HISTÓRICO</li>
            <li className='item-list-nav'>HORÁRIOS DE INTERVALO</li>
          </ul>
        </nav>

        <div className="user-header">
          <img src={userIcon} alt="" />
          <div className="user-header-info">
            <p className="name-user-header" >Kaique Pereira</p>
            <p className="user-type-header">Aluno</p>
          </div>
        </div>

    </header>
  );
};
