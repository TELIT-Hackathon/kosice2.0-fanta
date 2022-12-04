
import RoommateCard from "../components/RoommateCard";
import { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useFirebaseAuth } from '../FirebaseAuthContext';
import { getUsers, db, getUserData } from "../firebase";
import { filterData } from "../helper";

function RoommateList() {

    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useFirebaseAuth();

    const getData = async () => {
        try {
            if (user?.uid) {
                const filters = await getUserData(db, user.uid)
                const users = await getUsers(db)
                const filteredData = filterData(users, filters) || []
                const otherData = users.filter(el => !filteredData.some(x => x.id === el.id))
                setData(users);
                setAllData(otherData);
            }
            else {
                const users = await getUsers(db)
                setData(users)
                setAllData([]);
            }
            setLoading(false)
        }
        catch (err) {
            console.log("Ops", err)
            setData([]);
            setAllData([]);
            setLoading(false);
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