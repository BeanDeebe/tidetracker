import React from "react";
import { useParams } from "react-router-dom";

function StationDetails() {
    const { id } = useParams();
    return (
        <div>
            <div>
                <h3>This is the station details page for station {id}</h3>
            </div>
        </div>
    )
}

export default StationDetails;