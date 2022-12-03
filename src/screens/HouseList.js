
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import HouseCard from "../components/HouseCard";
import { defaultHexColor } from "../globals";
import { db, getAccomadation } from '../firebase'

function HouseList({ data }) {

    const [data, setData] = useState([])
    const getData = async () => {
        const data = await getAccomadation(db)
        console.log(data)
        setData(data)
    }


    useEffect(() => {
        // Update the document title using the browser API    
        getData()
    });



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