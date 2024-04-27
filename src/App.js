import "./App.css";
import Headerfirstpage from "../src/componentsfirstpage/headerfirstpage/header";
import Normal from "./componentsfirstpage/about_us/baout";
import Work_time from "./componentsfirstpage/Work_time/work";
import Reservation from "./componentsfirstpage/Reservation/reserv";
import Our_barbers from "../src/componentsfirstpage/Our_barbers/barber";
import Gallery from "./componentsfirstpage/Gallery/gallery";

export default function App() {
  return (
    <div className="App">
      <Headerfirstpage />
      <Normal />
      <Work_time />
      <Reservation />
      <Gallery />
    </div>
  );
}
