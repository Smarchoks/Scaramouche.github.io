import "./price.css";
import Headerfirstpage from "../headerfirstpage/Naf_header";
import Basement from "../Basement/basement";

export default function Price() {
  return (
    <>
      <Headerfirstpage />

      <div className="container_price">
        <h1 className="price_title">Prices & Services</h1>
        <div className="price_wrapper">
          <div className="price-sq">
            <div className="ss">
              <div className="pos">
                <ul>
                  <li className="zxc_c zxc"> Men's Haircut </li>
                  <li className="zxc">• $36,00Taper Haircut & Lineup</li>
                  <li className="zxc"> • $10,00Head Lineup Only</li>
                  <li className="zxc">• $10,00Men's Head Shave</li>
                  <li className="zxc">• $30,00Men's Haircut </li>
                  <li className="zxc">• $36,00Taper Haircut & Lineup</li>
                  <li className="zxc">• $10,00Head Lineup Only</li>
                  <li className="zxc">• $10,00Men's Head Shave </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Basement />
    </>
  );
}
