import React from "react";
import './headerCss.css';

export default () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 header">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6">
                            <div className="header-image img-fluid">
                                <img src="../assets/LABCAN-01.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}