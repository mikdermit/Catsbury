import React from "react";
import catsburyPark from "../../images/catsburypark.png";
import CatModal from "./CatModal";

function Adopt() {
    return (
        <div id="adopt" className="text-center">
            <div
                class="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${catsburyPark})`,
                    height: "500px",
                    backgroundSize: "cover"
                }}
            >
                <h1>Adopt</h1>
            </div>
            <div class='container'>
                <CatModal />
            </div>
        </div>
    );
}

export default Adopt;