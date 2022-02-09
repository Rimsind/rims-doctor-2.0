import { Patients } from "components/common";

const Index = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">My Appointments</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
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
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Speciality</th>
                          <th>Patient Name</th>
                          <th>Apointment Time</th>
                          <th>Status</th>
                          <th className="text-end">Amount</th>
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
