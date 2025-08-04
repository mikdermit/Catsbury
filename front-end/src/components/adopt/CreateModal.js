import React from "react";
import { getCats, createCat, deleteCat } from "../../utils/api";

function CreateModal(setCats, setError) {
    const initialFormState = {
        name: "",
        sex: "",
        dob: "",
        description: ""
    };
    const [cat, setCat] = React.useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        setCat({ ...cat, [target.id]: target.value });
    };

    const handleCreate = async e => {
        e.preventDefault();
        const controller = new AbortController();
        createCat(cat, controller.signal)
            .then(() => {
                getCats(controller.signal).then(setCats).catch(setError);
            })
            .catch(setError);
        return () => controller.abort();
    };
    return (
        <>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
            >
                New +
            </button>
            <div class="modal" id="createModal" tabindex="-1" role="dialog">
                <div
                    class="modal-dialog modal-dialog-scrollable"
                    role="document"
                >
                    <div class="modal-content" style={{ width: "600px" }}>
                        <div class="modal-header">
                            <h5 class="modal-title">Create Cat</h5>
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
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="sex">Sex</label>
                                        <select
                                            id="sex"
                                            class="form-control"
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
                                        placeholder="Description"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-primary"
                                onClick={handleCreate}
                            >
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

export default CreateModal;
