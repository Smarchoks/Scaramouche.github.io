import "./basement.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Basement() {
  return (
    <div className="container_basement">
      <div className="contact">
        <h1 className="name_contact">Контакты</h1>
        <p className="number">+79531787845</p>
        <p className="street">Ул. Лесная 3, г.Санкт-Петербург</p>
      </div>
      <div className="navigation_yarick">
        <h1 className="name_yarick buba">Навигация</h1>
        <ul className="egor">
          <li className="size_text">Главная</li>
          <li className="size_text">О нас</li>
          <li className="size_text">Цены</li>
        </ul>
      </div>
      <div className="icon">
        <h1 className="name_icon">Иконки</h1>
        <div className="icon_div">
          <TelegramIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
