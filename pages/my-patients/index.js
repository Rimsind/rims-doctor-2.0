import { Breadcrumb, Patients } from "components/common";

const Index = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Breadcrumb title="My Patients" />
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-baseline">
                    <div className="col-md-3 col-sm-12 col-lg-3">
                      <form className="d-flex">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3"></div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                      <div className="pagination mb-3 d-flex justify-content-end">
                        <div className="pagi_sectio">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item disabled">
                                <a
                                  className="page-link"
                                  href="#"
                                  tabIndex="-1"
                                  aria-disabled="true"
                                >
                                  Previous
                                </a>
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link active" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Patient Id</th>
                          <th>Patient Name</th>
                          <th>Gender</th>
                          <th>Age</th>
                          <th>Last Apointment</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <Patients />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination mt-3 d-flex justify-content-end">
                    <div className="pagi_sectio">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              tabIndex="-1"
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link active" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default Index;
