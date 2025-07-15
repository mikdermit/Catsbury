import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function About() {
    return (
        <div id="about" className="text-center">
            <div
                class="d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${catsburyPark})`,
                    height: "500px",
                    backgroundSize: "cover"
                }}
            >
                <h1>About</h1>
            </div>
        </div>
    );
}

export default About;
