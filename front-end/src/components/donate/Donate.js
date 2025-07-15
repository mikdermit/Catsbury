import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function Donate() {
    return (
        <div id="donate" className="text-center">
            <div
                class="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${catsburyPark})`,
                    height: "500px",
                    backgroundSize: "cover"
                }}
            >
                <h1>Donate</h1>
            </div>
        </div>
    );
}

export default Donate;