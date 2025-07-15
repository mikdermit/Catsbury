import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function Visit() {
    return (
        <div id="visit" className="text-center">
            <div class="d-flex header-image">
                <h1>Visit</h1>
            </div>
            <div class="container">
                <div class="pt-5">
                    <h4>
                        Come and play with cats and kittens for an entire hour.
                        Approximately 25 cats and kittens are looking for homes
                        and lots of love and attention. So you will have no
                        shortage of furry friends to keep you busy.
                    </h4>
                    <h4 class="pt-3">
                        We accept walk-ins when we can accommodate, but we are
                        regularly sold out and a reservation guarantees your
                        admission to the lounge.
                    </h4>
                    <h4 class="pt-3">
                        <b>
                            REMEMBER — if you are late, we can not extend your
                            visit.
                        </b>
                    </h4>
                    <button type="button" class="btn btn-primary my-4 w-25">
                        Click Here To Book Now
                    </button>
                </div>
                <div>
                    <p>
                        The cat lounge is limited to 10 guests an hour, which
                        means you have more kitties to yourself!
                    </p>
                    <p>
                        All ages are welcome, but children under age 14 must be
                        accompanied by an adult (adult and child both need a
                        ticket).
                    </p>
                    <p>
                        <b>
                            Reservations are STRONGLY recommended, as our hourly
                            capacity is 10 persons.
                        </b>
                    </p>
                </div>
                <div>
                    <h3>Upcoming Events</h3>
                    <div>
                        <button type="button" class="btn btn-primary mt-4 w-25">
                            Yoga with Cats!
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary mt-4 w-25">
                            Cats & Tarot
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary mt-4 w-25">
                            Book Club
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Visit;
