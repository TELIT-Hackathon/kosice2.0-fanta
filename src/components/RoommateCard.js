
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import PetsIcon from '@mui/icons-material/Pets';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

import GenericButton from "./GenericButton";
import "./RoommateCard.scss";

function RoommateCard({data}){
  const colorMain = '#56DDC5';

  console.log(data);
  const {
    age,
    description,
    firstName,
    lastName,
    location,
    sex
  } = data;

  return (
    <div className="RoommateCard">
      <h3>{firstName}</h3>
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
      <p className='bold'>OBLUBENE NEHNUTELNOSTI</p>
      <p>Adresa 12, Kosice</p>
      <div className="center">
        <GenericButton text="Kontaktuj"></GenericButton>
      </div>
    </div>
  );
}

export default RoommateCard;