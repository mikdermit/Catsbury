import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function FosterApp() {
    return (
        <div id="fosterApp" className="text-center">
            <div
                class="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${catsburyPark})`,
                    height: "500px",
                    backgroundSize: "cover"
                }}
            >
                <h1>Foster Application</h1>
            </div>
        </div>
    );
}

export default FosterApp;