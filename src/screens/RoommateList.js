
import RoommateCard from "../components/RoommateCard";
import { useState, useEffect } from "react";
import { Grid} from "@mui/material";

import {getUsers, db} from "../firebase";

function RoommateList(){

    const [data, setData] = useState([]);

    const getData = async () => {
        try {

            const users = await getUsers(db)
            setData(users)
        }
        catch (err) {
            console.log("Ops", err)
            setData([]);
        }

    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <Grid container justifyContent={"center"} maxWidth="1366px" margin="auto">
            {data?.map((user, index) => ( 
                <Grid
                key={index}
                item
                md={3}
                xs={10}
                display="flex"
                justifyContent="center"
                margin={1}
                >
                <RoommateCard data={user} key={index}></RoommateCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default RoommateList;