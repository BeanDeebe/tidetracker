import React from "react";
import StationListView from "../components/StationListView";


export default function MainContent() {
    return (
        <div>
            <div className="input-group rounded">
                <input type="search"
                       className="form-control rounded"
                       placeholder="Search"
                       aria-label="Search"
                       aria-describedby="search-addon"/>
                <span className="input-group-text border-0"
                      id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
            <div>
                <StationListView stationsPerPage={10} />
            </div>
        </div>
    )
}