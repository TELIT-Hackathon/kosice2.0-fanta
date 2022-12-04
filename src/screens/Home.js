import { Link } from "react-router-dom";
import "./Home.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import { useFirebaseAuth } from "../FirebaseAuthContext"
import { db, getUserData } from "../firebase"

function Home() {

  const user = useFirebaseAuth();

  console.log(user)
  getUserData(db, user?.uid)


  return (
    <div className="home">
      <div className="content">
        <div className="user">
          <span>pouzivatel</span>
          <p>{user.email}</p>
          <div className="profileSettings">
            <SettingsIcon></SettingsIcon>
            <p>Nastavenia profilu</p>
          </div>
        </div>
        <div className="flex">
        <div className="About">
          <h1>About app</h1><br></br>
          <p>Technológie virtuálnej reality (VR) vedia používateľom ponúknuť rôzne zážitky a skúsenosti. Jedným z tých pozoruhodnejších a významnejších je ponorenie do histórie. Vo VR môže človek preskúmať historické prostredie a dozvedieť sa o ňom jedinečným dynamickým spôsobom.</p>
        </div>
        <div className="cols">
          <div className="col">
            <div>
              <h4>Vyhladat ludi</h4><br></br>
              <p>complete quizes assigned to you by your teachers</p>
            </div>
            <Link to="customer-form" className="arrow">
              <ArrowForwardIcon></ArrowForwardIcon>
            </Link>
          </div>
          <div className="col">
            <div>
              <h4>Vyhladat nehnutelnosti</h4><br></br>
              <p>complete quizes assigned to you by your teachers</p>
            </div>
            <Link to="results" className="arrow">
              <ArrowForwardIcon></ArrowForwardIcon>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
