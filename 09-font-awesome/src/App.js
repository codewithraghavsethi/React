import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFaceAngry, faFaceDizzy, faFaceFlushed, faFaceGrimace, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons/faFaceFrown";
import { faA, faE, faFaceFrownOpen, faG, faH, faI, faR, faS, faSearch, faT, faV } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons/faFaceGrin";

function App() {
  return (
    <>
    <div className="App" style={{fontSize:"100px"}}>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
     <div className="App" style={{fontSize:"100px"}}>
      <FontAwesomeIcon icon={faR}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faA}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faG}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faH}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faA}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faV}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faS}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faE}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faT}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faH}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faI}></FontAwesomeIcon>
     </div>
     </>
  );
}

export default App;
