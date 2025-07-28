import React from "react";

function CatModal() {
    return (
        <>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#newModal"
            >
                New +
            </button>
            <div class="modal" id="newModal"tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                    <div class="modal-content" style={{width: "600px"}}>
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
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="sex">Sex</label>
                                        <select id="sex" class="form-control">
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
                                        />
                                    </div>
                                </div>
                                <div class="form-group p-3">
                                    <label for="description">
                                        Description (optional)
                                    </label>
                                   <textarea class="form-control" id="description" placeholder="Description"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">
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

export default CatModal;
