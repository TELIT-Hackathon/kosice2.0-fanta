import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";
import { defaultHexColor } from "../globals";
import BedIcon from "@mui/icons-material/Bed";
import StraightenIcon from "@mui/icons-material/Straighten";
import { Container, Box } from "@mui/system";
import GenericButton from "./GenericButton";
import {useNavigate} from "react-router-dom";

function HouseCard({ data}) {
  const navigate = useNavigate();
  const {
    id,
    thumbnail_url,
    street,
    location,
    rooms,
    area,
    discount,
    people_preference,
    monthly_fee,
  } = data;

  const onClick = ()=>{
    navigate('/HouseDetail', {state: {data}});
  }

  return (
    <Card
      sx={{
        width: 550,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        border: 'none',
        borderRadius: "16px",
        minHeight: 380,
        maxHeight: 500,
      }}
      variant={"outlined"}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardMedia
          sx={{ borderRadius: "8px"}}
          component="img"
          height="200"
          image={thumbnail_url}
          alt="Residence image"
        />
        <Grid container>
          <Grid item xs={12} md={8} paddingLeft={"10px"} paddingTop={"5px"}>
            <Typography variant="h6" component="div">
              {street}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {location}
            </Typography>
            <Typography variant="h5">
              {" "}
              <BedIcon sx={{ color: defaultHexColor }} fontSize="large" />
              {"  "}
              {rooms}
              {"  "}
              <StraightenIcon
                sx={{ color: defaultHexColor }}
                fontSize="large"
              />
              {"  "}
              {area}
              {" m²"}
            </Typography>
            {discount ? (
              <Typography variant="h6">
                Zľava {"  "}
                {people_preference.map((preference) => (
                  <span key={preference} style={{ color: defaultHexColor }}>
                    {preference}{" "}
                  </span>
                ))}
              </Typography>
            ) : null}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4" component="div">
              {monthly_fee}
              {" €"}
            </Typography>
              <GenericButton text="viac" onClick={onClick}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default HouseCard;
