import { useParams } from "react-router-dom";
import "./HouseDetail.scss"
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';

function HouseDetail({data}) {
    const {id} = useParams();
    const houseData = data[id];

    return (
      <div className="house-detail">
        <div className="card">
          <div className="main-content">
            <img src={houseData.thumbnail_url}></img>
            <div>
              <div className="location">
                <h3>{houseData.street}</h3>
                <p>{houseData.location}</p>
              </div>
              <h3>{houseData.monthly_fee}/mesiac</h3>
            </div>
            <div className="bedAndDiscount">
              <div>
                <div className="bed">
                  <BedOutlinedIcon></BedOutlinedIcon>
                  <p>{houseData.rooms}</p>
                </div>
                <div className="area">
                  <StraightenOutlinedIcon></StraightenOutlinedIcon>
                  <p>{houseData.area}</p>
                </div>
              </div>
              <p>{houseData.people_preference}</p>
            </div>
            <p>Možnosti v okolí</p>
            <div>
              {houseData.facilities.map(d => (<p>{d}</p>))}
            </div>
            <p>Detailne info</p>
            <p>{houseData.description}</p>

          </div>
          <div className="map">
            <p>map</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HouseDetail;
  

