import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function Visit() {
    return (
        <div id="visit" className="text-center">
            <div
                class="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${catsburyPark})`,
                    height: "500px",
                    backgroundSize: "cover"
                }}
            >
                <h1>Visit</h1>
            </div>
        </div>
    );
}

export default Visit;