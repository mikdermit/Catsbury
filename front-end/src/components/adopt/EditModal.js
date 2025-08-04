import React, { useState, useEffect } from "react";
import { getCats, updateCat } from "../../utils/api";

function EditModal({ origCat }, setCats) {
    const [cat, setCat] = useState({ ...origCat });
    const [error, setError] = useState(null);

    const handleChange = ({ target }) => {
        setCat({ ...cat, [target.id]: target.value });
    };

    const handleEdit = async e => {
            e.preventDefault();
            const controller = new AbortController();
            updateCat(cat, controller.signal)
                .then(() => {
                   getCats(controller.signal).then(setCats).catch(setError);
                })
                .catch(setError);
            return () => controller.abort();
        };

    return !cat.name ? (
        <p>Loading...</p>
    ) : (
        <>
            <i
                class="fa-solid fa-pencil"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
            />
            <div class="modal" id="editModal" tabindex="-1" role="dialog">
                <div
                    class="modal-dialog modal-dialog-scrollable"
                    role="document"
                >
                    <div class="modal-content" style={{ width: "600px" }}>
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Cat</h5>
                            <button
                                type="button"
                                class="close ms-3"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="d-flex flex-row align-items-center justify-content-between p-3">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input
                                            id="name"
                                            class="form-control"
                                            type="text"
                                            value={cat.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="sex">Sex</label>
                                        <select
                                            id="sex"
                                            class="form-control"
                                            value={cat.sex}
                                            onChange={handleChange}
                                        >
                                            <option>MN</option>
                                            <option>FS</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="dob">Date of Birth</label>
                                        <input
                                            id="dob"
                                            class="form-control"
                                            type="date"
                                            value={cat.dob}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div class="form-group p-3">
                                    <label for="description">
                                        Description (optional)
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="description"
                                        value={cat.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={handleEdit}>
                                Save
                            </button>
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditModal;
