import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function Shop() {
    return (
        <div id="shop" className="text-center">
            <div
                class="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${catsburyPark})`,
                    height: "500px",
                    backgroundSize: "cover"
                }}
            >
                <h1>Shop</h1>
            </div>
        </div>
    );
}

export default Shop;