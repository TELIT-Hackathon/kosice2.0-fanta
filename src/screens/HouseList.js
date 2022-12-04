
import { Grid, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import HouseCard from "../components/HouseCard";
import { defaultHexColor } from "../globals";
import { db, getAccomadation, getUserData } from '../firebase'
import { filterData } from "../helper";
// import { useLocation } from 'react-router-dom';
import { useFirebaseAuth } from '../FirebaseAuthContext';

function HouseList() {
    // const location = useLocation();
    const user = useFirebaseAuth();
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            // const userData = getUserData(db, user?.iud)
            // console.log("🚀 ~ file: HouseList.js ~ line 21 ~ getData ~ userData", userData)
            if (user?.uid) {
                const filters = await getUserData(db, user.uid)
                const accomadation = await getAccomadation(db)
                const filteredData = filterData(accomadation, filters) || []
                const otherData = accomadation.filter(el => !filteredData.some(x => x.id === el.id))
                setData(filteredData)
                setAllData(otherData);
                setLoading(false)
            }
            else {
                const accomadation = await getAccomadation(db)
                setData(accomadation)
                setAllData([]);
                setLoading(false)
            }
        }
        catch (err) {
            console.log("Ops", err)
            setLoading(false)
            setData([])
            setAllData([]);
        }

    }


    useEffect(() => {
        getData();
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
            {allData.length > 1 &&
                <>
                    <Grid item xs={12}>
                        <Typography paddingLeft={5} padding={2} variant={"h5"}>
                            Ďalšie zaujímavé ponuky.
                        </Typography>
                    </Grid>
                    {allData.map((residence, index) => (
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
                </>
            }
        </Grid>
    );

}

export default HouseList;