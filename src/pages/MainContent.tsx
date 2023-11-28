import React from "react";
import StationListView from "../components/StationListView";
import SearchBar from "../components/SearchBar"

export default function MainContent() {
    return (
        <div>
            <SearchBar />
            <div>
                <StationListView stationsPerPage={8} />
            </div>
        </div>
    )
}