import { Link } from "react-router-dom/dist";
import "./Naf_header.css";

export default function HeaderNav() {
  return (
    <div className="menu _conteiner">
      <a href="/" className="defolt logo"></a>

      <div className="menu_blocks">
        <nav className="nav_menu">
          <ul className="navigation">
            <li>
              <a href="/" className="defolt">
                Главная
              </a>
            </li>
            <li>
              <a href="/" className="defolt">
                asd
              </a>
            </li>
            <li>
              <a href="#" className="defolt">
                Наши Стилисты
              </a>
            </li>
            <li>
              <Link to="/price" className="defolt">
                Цены
              </Link>
            </li>
            <li>
              <a href="#" className="defolt">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="krug">
                Связаться с нами
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
