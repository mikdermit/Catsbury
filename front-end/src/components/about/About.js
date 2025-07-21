import React from "react";
import catsburyPark from "../../images/catsburypark.png";

function About() {
    return (
        <div id="about" className="text-center">
            <div class="d-flex header-image">
                <h1>About</h1>
            </div>
            <h4 class="p-4">
                <b>
                    Together, we can create a community where every cat has a
                    chance for a better life.
                </b>
            </h4>
            <div class="accordion" id="aboutAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Our Founding Story
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#aboutAccordion"
                    >
                        <div class="accordion-body">
                            <p>
                                Catsbury Park was founded in July 2016 in Asbury
                                Park, NJ, by Jersey Shore native DJ Bornschein
                                as a foster-based rescue. DJ brought over 25
                                kittens into his home, got them vetted, spayed &
                                neutered, and eventually adopted. That summer,
                                DJ had the vision to expand Catsbury Park, open
                                NJ’s first cat cafe to help find homes for even
                                more cats, and increase Catsbury Park’s
                                visibility. Inspired by his visit to Cat Town
                                Rescue and cat cafe in Oakland during his time
                                in San Francisco, DJ brought this innovative
                                idea to New Jersey.
                            </p>
                            <p>
                                In September 2017, Catsbury Park Cat Cafe & Tea
                                House opened its doors in Asbury Park, NJ,
                                marking a significant milestone. The physical
                                location provided a platform for Catsbury Park
                                to expand its rescue efforts, partnering with
                                local shelters to offer a new lease on life for
                                many at-risk cats. The results were tangible,
                                with over 200 cats and kittens finding their
                                forever homes in the first year alone.
                            </p>
                            <p>
                                April 2018 saw yet another milestone for
                                Catsbury Park: the inception of the inaugural
                                Catsbury Park Cat Convention (CPCC). This event
                                was a celebration of our shared love for
                                felines, bringing close to 5,000 cat lovers to
                                the Jersey Shore. The convention featured
                                entertainment, shopping, and educational
                                seminars on all things feline, raising funds for
                                Catsbury Park and various other organizations we
                                support. The event’s success exceeded our
                                expectations, and its return in 2019 was even
                                bigger. In October 2019, the event expanded to
                                Philadelphia, receiving rave reviews.
                            </p>
                            <p>
                                The COVID-19 pandemic brought challenges,
                                including the temporary closure of Catsbury
                                Park’s physical location. However, we persevered
                                and continued our mission. By March 2020,
                                Catsbury Park had already found homes for over
                                1,000 cats and kittens. From March 2020 to
                                January 2022, we returned to our roots as a
                                foster-based rescue, conducting adoptions via
                                events and Zoom meet-and-greets. Without a
                                physical location, we expanded our rescue work
                                to more grassroots trapping and TNR. In 2020 and
                                2021, we successfully TNR’d
                                (trapped/neutered/returned) close to 500 cats
                                and kittens.
                            </p>
                            <p>
                                Post-COVID, Catsbury Park opened a temporary
                                location in a 900-square-foot warehouse near our
                                old location in January 2022. Having a physical
                                location to do adoptions and entertain guests
                                again saw adoption numbers skyrocket. Finally,
                                in winter 2023, we took over the entire
                                3000-square-foot warehouse space. We are
                                planning a complete renovation to expand our
                                ability to house and rescue even more at-risk
                                cats and kittens.
                            </p>
                            <p>
                                Big things are on the horizon for Catsbury Park
                                in 2024. A completely renovated adoption lounge
                                and Cat Cafe will open in the summer of 2024. On
                                October 5, 2024, we will welcome the return of
                                The Catsbury Park Cat Convention to the
                                beautiful Bell Works building in Holmdel, NJ.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Mission Statement
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#aboutAccordion"
                    >
                        <div class="accordion-body">
                            HELPING TO SAVE THE LIVES OF CATS AND KITTENS IN
                            NEED THROUGH RESCUE, TNR, AND EDUCATION AT THE
                            JERSEY SHORE AND BEYOND!
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Vission Statement
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#aboutAccordion"
                    >
                        <div class="accordion-body">
                            Our vision is a community where no cat or kitten has
                            to go without a home or affordable access to spay
                            and neuter. We invite you to join us in our mission
                            to save the lives of cats and kittens in need.
                            Whether through adoption, volunteering, fostering,
                            or donations, your support makes a difference.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
