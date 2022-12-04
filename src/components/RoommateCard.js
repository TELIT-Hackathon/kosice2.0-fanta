
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import PetsIcon from '@mui/icons-material/Pets';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

import "./RoommateCard.scss";

function RoommateCard(){
  const colorMain = '#56DDC5';

  return (
    <div className="RoommateCard">
      <h3>Michal 21</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate, </p>
      <div className='flexBoxContainer'>
        <div>
          <SmokingRoomsIcon sx={{color:colorMain}}></SmokingRoomsIcon>
          <p>YES</p>
        </div>
        <div>
          <PetsIcon sx={{color:colorMain}}></PetsIcon>
          <p>YES</p>
        </div>
        <div>
          <ChildFriendlyIcon sx={{color:colorMain}}></ChildFriendlyIcon>
          <p>YES</p>
        </div>
      </div>
      <p>OBLUBENE NEHNUTELNOSTI</p>
      <p>Adresa 12, Kosice</p>
    </div>
  );
}

export default RoommateCard;