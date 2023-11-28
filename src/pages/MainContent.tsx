import React from "react";
import StationListView from "../components/StationListView";
import SearchBar from "../components/SearchBar"
import SidePageBarriers from "../components/SidePageBarriers";

function MainContent() {
    return (
        <div className="row">
            <SidePageBarriers />
            <div className="col-6">
                <SearchBar />
                <div>
                    <StationListView stationsPerPage={5} />
                </div>
            </div>
            <SidePageBarriers />
        </div>
    )
}

export default MainContent;