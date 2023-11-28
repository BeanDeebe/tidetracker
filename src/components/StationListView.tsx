import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchStationData from "../api/fetchStationData";
import processXmlData from "../api/processXmlData";
import ReactPaginate from "react-paginate";
import "../styles/StationListView.css"
import "../interfaces/StationI";
import { StationI } from "../interfaces/StationI";

// @ts-ignore
function StationItem({ currentStations }) {

    const navigate = useNavigate();
    const redirect = (id: string) => {
        const urlPath = "/station/" + id
        console.log(urlPath);
        navigate(urlPath);
    }
    return (
        <ul className="list-group">
            {currentStations &&
                currentStations.map(({ id, name, state}: StationI) => (
                        <li key={id}
                            className="list-group-item d-flex justify-content-between align-items-start station-item"
                        >
                            <a href="" className="list-link d-flex " onClick={() => redirect(id)}>
                                <div>
                                    <h5>{name}, {state}</h5>
                                </div>
                            </a>
                        </li>
                ))}
        </ul>

    )
}
// @ts-ignore
function StationListView({ stationsPerPage }) {

    const [stationList, setStationList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStationData();
            const processedData = processXmlData(data);
            //@ts-ignore
            setStationList(processedData);
            //@ts-ignore
            setTotalPages(Math.ceil(processedData.length / stationsPerPage));
        };

        fetchData();
    }, [stationList, stationsPerPage]);


    const startIndex = currentPage * stationsPerPage;
    const endIndex = startIndex + stationsPerPage;
    let subset = stationList.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage: any) => {
        console.log('hey');
        setCurrentPage(selectedPage.selected);
        subset = stationList.slice(startIndex, endIndex);
    }

    stationList.sort(function(a, b) {
        // @ts-ignore
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        // @ts-ignore
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    })


    return (
        <div className="p-2">
                <StationItem currentStations={subset}/>
                <ReactPaginate
                    containerClassName="pagination paginate-view justify-content-center p-3"
                    pageClassName="page-item"
                    pageCount={totalPages}
                    onPageChange={handlePageChange}
                />
        </div>
    );
}

export default StationListView;