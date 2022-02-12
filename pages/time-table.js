import { Breadcrumb } from "components/common";

const TimeTable = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Breadcrumb title="Time Table" />
        <div className="content container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="time-table-modal-item">
                <div className="row align-items-end mb-3 pb-3 border-bottom">
                  <div className="col-md-6 col-sm-6 col-lg-6">
                    <p className="fs-5 fw-bold">Time table add</p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-6">
                    <div className="time-table-modal-btn text-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Add New Entry
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Time Table
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="modal-upper-con border-bottom pb-3">
                          <div className="row align-items-center">
                            <div className="col-md-8 col-sm-8 col-lg-8">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select Polyclinic</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-md-4 col-sm-4 col-lg-4">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Fees eg: 500"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-middle-con mt-3 mb-3">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Day</option>
                            <option value="1">Monday</option>
                            <option value="2">Tuesday</option>
                            <option value="3">Wednesday</option>
                            <option value="4">Thursday</option>
                            <option value="5">Friday</option>
                            <option value="6">Saturday</option>
                            <option value="7">Sunday</option>
                          </select>
                        </div>
                        <div className="modal-lower-con">
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="morning-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#morning"
                                type="button"
                                role="tab"
                                aria-controls="morning"
                                aria-selected="true"
                              >
                                Morning
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="afternoon-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#afternoon"
                                type="button"
                                role="tab"
                                aria-controls="afternoon"
                                aria-selected="false"
                              >
                                Afternoon
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="evening-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#evening"
                                type="button"
                                role="tab"
                                aria-controls="evening"
                                aria-selected="false"
                              >
                                Evening
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="morning"
                              role="tabpanel"
                              aria-labelledby="morning-tab"
                            >
                              <div className="row align-items-center">
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="afternoon"
                              role="tabpanel"
                              aria-labelledby="afternoon-tab"
                            >
                              <div className="row align-items-center">
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="evening"
                              role="tabpanel"
                              aria-labelledby="evening-tab"
                            >
                              <div className="row align-items-center">
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-xl-3">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="time-table-output rounded-3 mt-3 py-3 px-3 shadow-sm">
                          <div className="row align-items-center">
                            <div className="col-md-3 col-lg-1 col-sm-1">
                              <div className="time-table-icon">
                                <button className="btn rounded-circle">
                                  <i className="fad fa-trash"></i>
                                </button>
                              </div>
                            </div>
                            <div className="col-md-3 col-lg-1 col-sm-1">
                              <p className="fs-6 fw-light">Monday</p>
                            </div>
                            <div className="col-md-6 col-lg-10 col-sm-10">
                              <div className="row align-items-center">
                                <div className="col-md-12 col-sm-12 col-lg">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1 disabled"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1 disabled"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1 disabled"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1 disabled"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg">
                                  <div className="schd-item me-2 mb-2">
                                    <button
                                      className="btn btn-custom-time-slot rounded-1 disabled"
                                      value="9:00 AM"
                                    >
                                      9:00 AM - 9:15 AM
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="time-table-output rounded-3 mt-3 py-3 px-3 shadow-sm">
                <div className="row align-items-center">
                  <div className="col-md-3 col-lg-1 col-sm-1">
                    <div className="time-table-icon">
                      <button className="btn rounded-circle">
                        <i className="fad fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-1 col-sm-1">
                    <p className="fs-6 fw-light">Monday</p>
                  </div>
                  <div className="col-md-6 col-lg-10 col-sm-10">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-sm-12 col-lg">
                        <div className="schd-item me-2 mb-2">
                          <button
                            className="btn btn-custom-time-slot rounded-1 disabled"
                            value="9:00 AM"
                          >
                            9:00 AM - 9:15 AM
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg">
                        <div className="schd-item me-2 mb-2">
                          <button
                            className="btn btn-custom-time-slot rounded-1 disabled"
                            value="9:00 AM"
                          >
                            9:00 AM - 9:15 AM
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg">
                        <div className="schd-item me-2 mb-2">
                          <button
                            className="btn btn-custom-time-slot rounded-1 disabled"
                            value="9:00 AM"
                          >
                            9:00 AM - 9:15 AM
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg">
                        <div className="schd-item me-2 mb-2">
                          <button
                            className="btn btn-custom-time-slot rounded-1 disabled"
                            value="9:00 AM"
                          >
                            9:00 AM - 9:15 AM
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg">
                        <div className="schd-item me-2 mb-2">
                          <button
                            className="btn btn-custom-time-slot rounded-1 disabled"
                            value="9:00 AM"
                          >
                            9:00 AM - 9:15 AM
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
