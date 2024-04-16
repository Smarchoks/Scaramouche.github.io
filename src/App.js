import "./App.css";
import Headerfirstpage from "../src/componentsfirstpage/headerfirstpage/header";
import Normal from "./componentsfirstpage/about_us/baout";
import Price from "./componentsfirstpage/Price/price";


export default function App() {
  return (
    <div className="App">
      <Headerfirstpage />
      <Normal />
      <Price />
    </div>
  );
}
