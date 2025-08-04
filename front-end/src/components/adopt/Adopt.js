import React, { useState, useEffect } from "react";
import catsburyPark from "../../images/catsburypark.png";
import { getCats, createCat, deleteCat } from "../../utils/api";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";

function Adopt() {
    const [cats, setCats] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        getCats(controller.signal).then(setCats).catch(setError);
        return () => controller.abort();
    }, []);

    const handleDelete = (cat) => async () => {
        const controller = new AbortController();
        await deleteCat(cat.id, controller.signal).catch(setError);
        await getCats(controller.signal).then(setCats).catch(setError);
        console.log(cats)
    };  

    const setDOB = () => {
        cats.forEach(cat => {
            if (cat.dob) {
                cat.dob = new Date(cat.dob).toISOString().split("T")[0];
            }
        });
    };

    setDOB();

    return cats.length < 0 ? (
        <p>loading</p>
    ) : (
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
            <div class="container">
                <CreateModal setCats={setCats} setError={setError} />
                {cats.map(cat => (
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                <i class="fa-solid fa-xmark" onClick={handleDelete(cat)} />
                                {cat.name} - {cat.sex} - {cat.dob}
                                <EditModal origCat={cat} setCats={setCats} />
                            </h5>
                            <p class="card-text">{cat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adopt;
