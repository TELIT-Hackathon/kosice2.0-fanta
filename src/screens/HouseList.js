
import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import HouseCard from "../components/HouseCard";
import { defaultHexColor } from "../globals";
import { db, getAccomadation } from '../firebase'
import {useLocation} from 'react-router-dom';

function HouseList() {
    const location = useLocation();
    const [data, setData] = useState([]);

    const getData = async () => {
        const filter = location?.state?.filterList
        console.log("🚀 ~ file: HouseList.js ~ line 15 ~ getData ~ filter", filter)
        const accomadation = await getAccomadation(db)
        console.log(accomadation)
        setData(accomadation)
    }


    useEffect(() => {
        // Update the document title using the browser API    
        getData()
    },[]);



    return (
        <Grid container justifyContent={"center"} maxWidth="1366px" margin="auto">
            <Grid item xs={12}>
                <Typography paddingLeft={5} padding={2} variant={"h5"}>
                    Našli sme{" "}
                    <span style={{ color: defaultHexColor }}>{data.length}</span> ponúk.
                </Typography>
            </Grid>
            {data.map((residence) => (
                <Grid
                    item
                    md={5}
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    margin={1}
                >
                    <HouseCard data={residence} key={residence.id} />
                </Grid>
            ))}
        </Grid>
    );

}

export default HouseList;