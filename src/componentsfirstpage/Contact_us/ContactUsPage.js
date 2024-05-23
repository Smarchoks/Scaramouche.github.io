import PasswordIcon from '@mui/icons-material/Password';
import "./ContactUsPage.css";
import { Link } from "react-router-dom";
import Headerfirstpage from '../headerfirstpage/header';
import Basement from '../Basement/basement';

export default function ContactUs() {
  return (
    <>
    <Headerfirstpage />
    <section className="ContacUsSection">
      <div className="contactContent _conteiner">
        <figure className="logoContactUsPage ">
          <Link to="/">
            <i className="logoContactPage">
              <PasswordIcon fontSize="150px" />
            </i>
          </Link>
        </figure>
        <h1 className="contactText">СВЯЗАТЬСЯ С НАМИ</h1>
        <h3 className='contactText_biznes'>Оставьте свои данные для сотрудничества или рекламного сотруднечества</h3>
        <form className="Contactform">
          <input
            className="ContactInput"
            type="Email"
            name="Email"
            placeholder="Введите ваш Email"
          />
          <span className="btn_Contact">
            <Link to="/" className="ContactJoinLink">
              {" "}
              Отправить{" "}
            </Link>
          </span>
        </form>
      
      </div>
    </section>
    <Basement />
    </>
  );
}
