import "./basement.css";

export default function Basement() {
  return (
    <div className="container_basement">
      <div className="contact">
        <h1 className="name_contact">Контакты</h1>
        <p className="number">+79531787845</p>
        <p className="street">Ул. Лесная 3, г.Санкт-Петербург</p>
      </div>
      <div className="navigation_yarick">
        <h1 className="name_yarick">Навигация</h1>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Цены</li>
        </ul>
      </div>
      <div className="icon">
        <h1 className="name_icon">Иконки</h1>
      </div>
    </div>
  );
}
