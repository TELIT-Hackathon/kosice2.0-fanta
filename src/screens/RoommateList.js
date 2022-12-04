
import RoommateCard from "../components/RoommateCard";
import { Grid} from "@mui/material";

function RoommateList(){
    return (
        <Grid container justifyContent={"center"} maxWidth="1366px" margin="auto">
            <Grid
                    item
                    md={3}
                    xs={10}
                    display="flex"
                    justifyContent="center"
                    margin={1}
                >
                    <RoommateCard></RoommateCard>
            </Grid>
        </Grid>
    );
}

export default RoommateList;