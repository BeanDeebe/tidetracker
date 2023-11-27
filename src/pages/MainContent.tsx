import React from "react";

export default function MainContent() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Currents</h2>
                            <i className="fa-solid fa-water fa-5x d-flex justify-content-center"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Tides</h2>
                            <i className="fa-solid fa-ship fa-5x d-flex justify-content-center"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                <div className="col">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h2 className="text-center">Water Level</h2>
                            <i className="fa-solid fa-house-flood-water fa-5x d-flex justify-content-center"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h2 className="text-center">Station Search</h2>
                            <i className="fa-solid fa-tower-observation fa-5x d-flex justify-content-center"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}