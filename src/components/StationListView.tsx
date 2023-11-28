import React, { useState, useEffect } from "react";
import fetchStationData from "../api/fetchStationData";
import processXmlData from "../api/processXmlData";
import ReactPaginate from "react-paginate";
import "../styles/StationListView.css"
// @ts-ignore
function StationItem({ currentStations }) {
    return (
        <ul className="list-group">
            {currentStations &&
                currentStations.map(({name, state}, id: any) => (
                        <li key={id} className="list-group-item">
                            <span>{name}, {state}</span>
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
            setStationList(processedData);
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
        <div className="p-5">
            <StationItem currentStations={subset}/>
            <ReactPaginate
                containerClassName="pagination paginate-view justify-content-center p-3"
                activeClassName="active"
                pageCount={totalPages}
                onPageChange={handlePageChange}
            />

        </div>
    );
}

export default StationListView;