import { useParams } from "react-router-dom";
import "./HouseDetail.scss"
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';

function HouseDetail({data}) {
    const {id} = useParams();

    function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}

    const houseData = filterById(data, id);
    console.log(houseData);
    const colorMain = '#56DDC5';

    return (
      <div className="house-detail">
        <div className="card">
          <div className="main-content">
            <img src={houseData.thumbnail_url} className="thumbnail"></img>
            <div className="firstSection">
              <div className="location">
                <h3 className="heading">{houseData.street}</h3>
                <p className="secondaryText">{houseData.location}</p>
              </div>
              <h3 className="heading">{houseData.monthly_fee}/mesiac</h3>
            </div>
            <div className="bedAndDiscount">
              <div className="flexDiv">
                <div className="bed">
                  <BedOutlinedIcon sx={{color:colorMain, marginRight: '0.8rem'}}></BedOutlinedIcon>
                  <p>{houseData.rooms}</p>
                </div>
                <div className="area">
                  <StraightenOutlinedIcon sx={{color:colorMain, marginRight: '0.8rem'}}></StraightenOutlinedIcon>
                  <p>{houseData.area}</p>
                </div>
              </div>
              <p>{houseData.people_preference}</p>
            </div>
            <p className="secondaryHeading Moznosti">Možnosti v okolí</p>
            <div className="facilities">
              {houseData.facilities.map((d, index) => (<span key={index} className="facility secondaryText">{d}</span>))}
            </div>
            <p className="secondaryHeading">Detailne info</p>
            <p className="secondaryText">{houseData.description}</p>

          </div>
          <div className="map">
            <img src="/map.png" className="mappp"></img>
          </div>
        </div>
      </div>
    );
  }
  
  export default HouseDetail;
  

