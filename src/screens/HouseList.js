import { useState } from "react";
import HouseCard from "../components/HouseCard";


function HouseList() {
    const [data, setData] = useState([])

    const getData = () => {

    }


    return (
        <div className="house-list">
            <p>Našli sme {data.length} ponúk.</p>
            {data.map(x =>
                <HouseCard data={x} />
            )}
        </div>
    );
}

export default HouseList;
