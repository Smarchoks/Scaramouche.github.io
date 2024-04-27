import "./gallery.css";
import Rickjpg from "../../Img/Rick1.jpg";
import hatjpg from "../../Img/hat.jpg";
import kissjpg from "../../Img/Kiss.jpg";
import Snakejpg from "../../Img/Snake.jpg";
import twojpg from "../../Img/two.jpg";
import lovv66jpg from "../../Img/lovv66-13.webp";
import twoojpg from "../../Img/twoo.jpg";
import platinaajpg from "../../Img/platinaa.jpg";
import platinaaajpg from "../../Img/platinaaa.png";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={Rickjpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={Snakejpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={twoojpg}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={hatjpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={lovv66jpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={twojpg}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={twoojpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={twojpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={platinaaajpg}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={platinaaajpg}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={Snakejpg}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
}
