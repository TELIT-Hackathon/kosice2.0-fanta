
import { Grid, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import HouseCard from "../components/HouseCard";
import { defaultHexColor } from "../globals";
import { db, getAccomadation } from '../firebase'
import { useLocation } from 'react-router-dom';

function HouseList() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        // const filterList = location?.state?.filterList;
        // let filter = Object.fromEntries(Object.entries(filterList).filter(([_, v]) => v != null || v !== ''));

        // console.log("🚀 ~ file: HouseList.js ~ line 15 ~ getData ~ filter", filter)
        try{
            const accomadation = await getAccomadation(db)
            console.log(accomadation)
            setData(accomadation)
            setLoading(false)
        }
        catch{
            setLoading(false)
            setData([])
        }
        
    }

    

    useEffect(() => {
        // Update the document title using the browser API    
        getData()
    }, []);

    if (loading) {
        return <div className="d-flex justify-content-center mt-5">
            <CircularProgress />
        </div>
    }

    return (
        <Grid container justifyContent={"center"} maxWidth="1366px" margin="auto">
            <Grid item xs={12}>
                <Typography paddingLeft={5} padding={2} variant={"h5"}>
                    Našli sme{" "}
                    <span style={{ color: defaultHexColor }}>{data.length}</span> ponúk.
                </Typography>
            </Grid>
            {data.map((residence, index) => (
                <Grid
                    key={index}
                    item
                    md={5}
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    margin={1}
                >
                    <HouseCard data={residence} key={residence.index} />
                </Grid>
            ))}
        </Grid>
    );

}

export default HouseList;