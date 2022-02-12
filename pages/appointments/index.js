import { Appointments, Breadcrumb } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
const Index = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/appointments?doctor=${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Breadcrumb title="My Appointments" />
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-baseline">
                    <div className="col-md-3 col-sm-12 col-lg-3">
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Items</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
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
                          <th>Appointment Id</th>
                          <th>Patient Name</th>
                          <th>Gender</th>
                          <th>Age</th>
                          <th>Apointment Time</th>
                          <th>Payment</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((items, index) => (
                          <tr>
                            <Appointments data={items} key={index} />
                          </tr>
                        ))}
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
