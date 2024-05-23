import "./barber.css";
import platina from "../../Img/Platina.jpg";
import lovv66 from "../../Img/lovv66.jpg";
import boul from "../../Img/boul.jpg";
import Headerfirstpage from "../headerfirstpage/Naf_header";
import Basement from "../Basement/basement";

export default function Our_barbers() {
  return (
    <>
      <Headerfirstpage />

      <div className="container_barber">
        <h2 className="barber_title">Our Barbers</h2>
        <div className="container_cart">
          <div className="cart">
            <div className="cart_img">
              <img src={platina} width={370} height={366}></img>
            </div>
            <div className="cart_content">
              <h3 className="cart_title">Sam Adams</h3>
              <p className="x_our_barbers">✘</p>
              <p className="Misha">
                Sam has been in the hairdressing industry for over 10 years. His
                career started in his home country, Ireland.
              </p>
            </div>
          </div>
          <div className="cart">
            <div className="cart_img">
              <img src={lovv66} width={370} height={366}></img>
            </div>
            <div className="cart_content">
              <h3 className="cart_title">Dan Tomson</h3>
              <p className="x_our_barbers">✘</p>
              <p className="Misha">
                Dan is very passionate about his work from his razor sharp
                haircuts to mastered traditional wet shaves, which he has become
                very popular for.
              </p>
            </div>
          </div>
          <div className="cart">
            <div className="cart_img">
              <img src={boul} width={370} height={366}></img>
            </div>
            <div className="cart_content">
              <h3 className="cart_title">Peter Philips</h3>
              <p className="x_our_barbers">✘</p>
              <p className="Misha">
                Peter is well versed in both Classic hairdressing. He has great
                communication and understanding of clients’ needs and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Basement />
    </>
  );
}
