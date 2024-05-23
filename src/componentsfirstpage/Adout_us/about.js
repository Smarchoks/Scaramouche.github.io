import "./about.css";
import Headerfirstpage from "../headerfirstpage/Naf_header";
import  tutu  from "../../Img/tutu.webp";
import Basement from "../Basement/basement";

export default function About_us() {
  return (
    <>
      <Headerfirstpage />
      
      <div className="container_about_us">
        <h1 className="we_are">
          We are...
        </h1>
        <div className="content_about_us">
          <div className="content_what_say">
          <h2 className="popaa">
          What People Say About Us
          </h2>
          <p className="xxx">
          ✘✘✘
          </p>
          <p className="about_disc">
          Polite, professional, charming and courteous team. The best haircut I have ever had! Simon was full of crack, was more than happy to suggest the best cut for me and he even offered a free beverage - what more could I ask for?! 
          </p>
          </div>
          <div className="content_model">
          <h2 className="model">
          Martin LeeModel
          </h2>
          <p className="xxx">
          ✘
          </p>
          <p className="model_disc">
          I have taken my 3 yr old son for his first men's haircut and now I'm glad he has such a fantastic look. I recommended any of the barbers for service and pride in their work. I believe my son would never be allowed to leave the chair without a really handsome cut.
          </p>
          </div>
          <div className="photo_dude">
            <img src={tutu} className="tutu"></img>
          </div>
        </div>
          
      </div>
      <Basement />
    </>
  );
}
