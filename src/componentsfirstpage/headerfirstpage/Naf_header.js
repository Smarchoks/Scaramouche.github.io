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
              <Link to="/Our_barbers" className="defolt">
                Наши Стилисты
              </Link>
            </li>
            <li>
              <Link to="/price" className="defolt">
                Цены
              </Link>
            </li>
            <li>
              <Link to="/About_us" className="defolt">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/Contact_us" className="krug">
                Связаться с нами
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
