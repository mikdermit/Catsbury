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
            <div class="container">
                <div class="d-flex flex-column flex-md-row justify-content-around align-items-center flex-wrap">

                    <button type="button" class="btn btn-primary mt-4" style={{width:'fit-content', minWidth:'35%'}}>
                        <i class="fa-brands fa-paypal pe-3" />
                        Paypal
                    </button>

                    <button type="button" class="btn btn-warning mt-4" style={{width:'fit-content', minWidth:'35%'}}>
                        <i class="fa-brands fa-amazon pe-3"/>
                        Amazon Wishlist
                    </button>
                    <button type="button" class="btn btn-primary mt-4" style={{width:'fit-content', minWidth:'35%'}}>
                        <i class="fa-solid fa-cat pe-3"/>
                        Chewy Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Donate;
