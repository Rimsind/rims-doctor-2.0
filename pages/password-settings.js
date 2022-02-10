import { Breadcrumb } from "components/common";

const PasswordSettings = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Breadcrumb title="Password Settings" />
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Password Settings</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <form className="needs-validation" noValidate>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                Old Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Old Password"
                                required
                              />

                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6"></div>
                          </div>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                New Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="New Password"
                                required
                              />
                              <small className="text-secondary">
                                Password must contain at least 6 characters,
                                including UPPER / lowercase and number
                              </small>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6 mb-3"></div>
                          </div>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                Retype New Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Retype New Password"
                                required
                              />
                              <small className="text-secondary">
                                Please retype same password
                              </small>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6 mb-3"></div>
                          </div>
                          <div className="save-btn text-end">
                            <button
                              className="btn btn-primary px-4 py-2 fs-5 shadow-sm"
                              type="submit"
                            >
                              Save Password
                            </button>
                          </div>
                        </form>
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

export default PasswordSettings;
