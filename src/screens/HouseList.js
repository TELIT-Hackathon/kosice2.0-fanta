import { useState, useEffect } from "react";
import HouseCard from "../components/HouseCard";
import { db, getAccomadation } from '../firebase'


function HouseList() {
    const [data, setData] = useState([])


    const getData = async () => {
        // const snapshot1 = await db.collection('accomadation').get();
        // console.log(snapshot1)
        const data = await getAccomadation(db)
        console.log(data)
        setData(data)
    }


    useEffect(() => {
        // Update the document title using the browser API    
        getData()
    });


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