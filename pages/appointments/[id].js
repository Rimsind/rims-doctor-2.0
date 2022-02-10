import { AllergyCard, NotesCard, PatientDemographics } from "components/common";
const AppointmentId = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Diagnosis</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <PatientDemographics />
              <AllergyCard />
              <NotesCard />
            </div>
            <div className="col-md-10 col-lg-10 col-xl-10">
              <div className="card">
                <div className="card-header">
                  <div className="custom-tab row align-items-center">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div
                        className="tablinks diag-inner-content bg-primary pt-4 pb-1 text-center active"
                        // onclick={formTab(event,"subjective")}
                        id="defaultOpen"
                      >
                        <p className="fs-5 fw-bold text-light">
                          Subjective Informtion
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div
                        className="tablinks diag-inner-content bg-primary pt-4 pb-1 text-center"
                        // onclick="formTab(event, 'assesment')"
                      >
                        <p className="fs-5 fw-bold text-light">
                          Clinical Assesment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tabcontent" id="subjective">
                    <div className="card-header border-bottom">
                      <ul
                        role="tablist"
                        className="nav nav-tabs card-header-tabs"
                      >
                        <li className="nav-item">
                          <a
                            href="#tab-1"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            General Information
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-2"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Social Histroy & Living Environment
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-3"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Employment Status
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-4"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Medical History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-5"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Functional Status
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-6"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Family Medical History
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-7"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Past Medical Records
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content pt-0">
                        <div
                          role="tabpanel"
                          id="tab-1"
                          className="tab-pane fade show active"
                        >
                          <div className="general-information-form ">
                            <div className="max-w-6xl mx-auto md:py-10">
                              <div className="space-y-5 border-2 p-10 rounded">
                                <div className="space-y-2 pb-5">
                                  <form>
                                    <div className="gen-form">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <h3>Race / Ethnicity</h3>
                                        </div>
                                        <div className="col-md-9">
                                          <div className="row">
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="Asian"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    Asian
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="African"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    African
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="European"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    European
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="North American"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    North American
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="South American"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    South American
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="Australian"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    Australian
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="race"
                                                    value="Others"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    Others
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gen-form">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="row">
                                            <div className="col-md-6">
                                              <h3 className="fs-6 fs-bold text-dark">
                                                Language
                                              </h3>
                                            </div>
                                            <div className="col-md-6">
                                              <select
                                                className="form-select form-select-sm"
                                                aria-label=".form-select-sm example"
                                              >
                                                <option name="language">
                                                  gdfg
                                                </option>
                                                <option
                                                  value="English"
                                                  name="language"
                                                >
                                                  English
                                                </option>
                                                <option
                                                  value="Hindi"
                                                  name="language"
                                                >
                                                  Hindi
                                                </option>
                                                <option
                                                  value="Bengali"
                                                  name="language"
                                                >
                                                  Bengali
                                                </option>
                                                <option
                                                  value="Marathi"
                                                  name="language"
                                                >
                                                  Marathi
                                                </option>
                                                <option
                                                  value="Telugu"
                                                  name="language"
                                                >
                                                  Telugu
                                                </option>
                                                <option
                                                  value="Tamil"
                                                  name="language"
                                                >
                                                  Tamil
                                                </option>
                                                <option
                                                  value="Gujarati"
                                                  name="language"
                                                >
                                                  Gujarati
                                                </option>
                                                <option
                                                  value="Urdu"
                                                  name="language"
                                                >
                                                  Urdu
                                                </option>
                                                <option
                                                  value="Kannada"
                                                  name="language"
                                                >
                                                  Kannada
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="row">
                                            <div className="col-md-6">
                                              <h3 className="fs-6 fs-bold text-dark">
                                                Highest Level of Education
                                              </h3>
                                            </div>
                                            <div className="col-md-6">
                                              <select
                                                className="form-select form-select-sm"
                                                aria-label=".form-select-sm example"
                                              >
                                                <option name="education">
                                                  xfgfg
                                                </option>
                                                <option
                                                  value="Grade School"
                                                  name="education"
                                                >
                                                  Grade School
                                                </option>
                                                <option
                                                  value="Technical School"
                                                  name="education"
                                                >
                                                  Technical School
                                                </option>
                                                <option
                                                  value="Some College"
                                                  name="education"
                                                >
                                                  Some College
                                                </option>
                                                <option
                                                  value="Master's Degree"
                                                  name="education"
                                                >
                                                  Master&apos;s Degree
                                                </option>
                                                <option
                                                  value="High School"
                                                  name="education"
                                                >
                                                  High School
                                                </option>
                                                <option
                                                  value="Trade School"
                                                  name="education"
                                                >
                                                  Trade School
                                                </option>
                                                <option
                                                  value="College Graduate"
                                                  name="education"
                                                >
                                                  College Graduate
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gen-form">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <h3>Hand Foot Dominance</h3>
                                        </div>
                                        <div className="col-md-9">
                                          <div className="row">
                                            <div className="col-md-4">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="handFootDominance"
                                                    value="N/A"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    N/A
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="handFootDominance"
                                                    value="Left"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    Left
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="row">
                                                <div className="col-md-2">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="handFootDominance"
                                                    value="Right"
                                                  />
                                                </div>
                                                <div className="col-md-10">
                                                  <p className="space-x-4">
                                                    Right
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gen-form-soft-button mt-3">
                                      <div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                          <div
                                            className="right-button"
                                            style={{ textAlign: "right" }}
                                          >
                                            <button
                                              type="submit"
                                              className="btn btn-success"
                                            >
                                              Save Changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-2"
                          className="tab-pane fade"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    Where Do You Live?
                                  </p>
                                </div>
                                <div className="item-multi d-flex align-items-center justify-content-between">
                                  <p className="fs-6">Private Home</p>
                                  <p className="fs-6">Rented Home</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    With Whom Do You Live?
                                  </p>
                                </div>
                                <div className="item-multi d-flex align-items-center justify-content-between">
                                  <p className="fs-6">Alone</p>
                                  <p className="fs-6">Relative(s)</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    Does Your Home Have?
                                  </p>
                                </div>
                                <div className="item-multi d-flex align-items-center justify-content-between">
                                  <p className="fs-6">One Level</p>
                                  <p className="fs-6">Two Level</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    How Many Steps?
                                  </p>
                                </div>
                                <div className="item d-flex">
                                  <div className="item-inner me-3">
                                    <p className="fs-6 fw-bold">
                                      No. Steps Outside The Home -
                                    </p>
                                  </div>
                                  <div className="item-inner">
                                    <p>2</p>
                                  </div>
                                </div>
                                <div className="item d-flex">
                                  <div className="item-inner me-3">
                                    <p className="fs-6 fw-bold">
                                      No. Steps Inside The Home -
                                    </p>
                                  </div>
                                  <div className="item-inner">
                                    <p>2</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">Do You Use?</p>
                                </div>
                                <div className="item-multi d-flex align-items-center justify-content-between">
                                  <p className="fs-6">Forearm Crutches</p>
                                  <p className="fs-6">Axillary Crutches</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Cultural / Religious
                              </p>
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="item">
                                    <p className="fs-6 fw-bold">
                                      Any cultural or religious beliefs or
                                      wishes that might affect care?
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <div className="item-inner">
                                    <p className="fs-6">
                                      Some quick example text to build on the
                                      card title and make up the bulk of the
                                      card&apos;s content. Some quick example
                                      text to build on the card title and make
                                      up the bulk of the card&apos;s content.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Social / Health Habits
                              </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Do You Smoke Tobacco?
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">No</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Do You Drink Alchohol?
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">No</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Excercise?</p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Yes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6"></div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        If yes how many times per week?
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">10</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        How many minutes per day?
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">20</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-3"
                          className="tab-pane fade"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">Work Status -</p>
                                </div>
                                <div className="item">
                                  <p className="fs-6">Work Full Time</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">Occupation -</p>
                                </div>
                                <div className="item">
                                  <p className="fs-6">Businessman</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="inner-item d-flex align-items-center justify-content-between">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    Your Work Involves (Check All That Apply)
                                  </p>
                                </div>
                                <div className="item-multi d-flex align-items-center justify-content-between">
                                  <p className="fs-6">Prolonged Standing</p>
                                  <p className="fs-6">Working with bent neck</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-4"
                          className="tab-pane fade"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="inner-item">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    Past Medical History - Please Check If
                                    Anyone In Your Family Has Or Had Any Or The
                                    Following:
                                  </p>
                                </div>
                                <div className="item-multi d-flex align-items-center">
                                  <p className="fs-6">Diabetes</p>
                                  <p className="fs-6">Genetic Disease</p>
                                  <p className="fs-6">Pacemaker</p>
                                  <p className="fs-6">AIDS</p>
                                  <p className="fs-6">Anemia</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-6 fw-bold">
                                Past Medical History - For Women Only:
                              </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Pelvic Inflammatory Disease -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Yes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Trouble with Period -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Yes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Complicated Pregnancies -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Yes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Pregnant -</p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Yes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Endometriosis -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Yes</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Any Other -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Hello I am Fine</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-6 fw-bold">
                                Surgical History – Please List Any Surgeries You
                                Had, And If Known Include Dates:
                              </p>
                              <table className="table">
                                <thead className="table-info table-striped table-bordered">
                                  <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>First</td>
                                    <td>2022-01-18</td>
                                  </tr>
                                  <tr>
                                    <td>Second</td>
                                    <td>2022-01-14</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="col-md-12 mt-3">
                              <div className="inner-item">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    Diagnostic Test/Measures - Within The Past
                                    Year, Have You Had Any Of The Following
                                    (Check All That Apply):
                                  </p>
                                </div>
                                <div className="item-multi d-flex align-items-center">
                                  <p className="fs-6">Bronchoscopy</p>
                                  <p className="fs-6">EMG/Nerve Conduction</p>
                                  <p className="fs-6">Angiogram</p>
                                  <p className="fs-6">Stool Test</p>
                                  <p className="fs-6">CT scan</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-6 fw-bold">
                                Medications & Allergies – Please Check Or List
                                All Medications Or Allergies:
                              </p>
                              <table className="table">
                                <thead className="table-info table-striped table-bordered">
                                  <tr>
                                    <th>Medicine Name</th>
                                    <th>Medicine Dose</th>
                                    <th>Start Date</th>
                                    <th>Status</th>
                                    <th>Type</th>
                                    <th>Route</th>
                                    <th>Frequency</th>
                                    <th>Any Side Effect</th>
                                    <th>If Yes</th>
                                    <th>Allergies</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Cipcal</td>
                                    <td>500</td>
                                    <td>13/01/2022</td>
                                    <td>Continue</td>
                                    <td>Prescribed</td>
                                    <td>Oral</td>
                                    <td>2 times per day</td>
                                    <td>Yes</td>
                                    <td>Headech</td>
                                    <td>Rashes</td>
                                  </tr>
                                  <tr>
                                    <td>Cipcal</td>
                                    <td>500</td>
                                    <td>13/01/2022</td>
                                    <td>Continue</td>
                                    <td>Prescribed</td>
                                    <td>Oral</td>
                                    <td>2 times per day</td>
                                    <td>Yes</td>
                                    <td>Headech</td>
                                    <td>Rashes</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-5"
                          className="tab-pane fade"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Any Difficulty With Current Functional Mobility
                              </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Bed Mobility
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Transfers (Such As Bed To Chair, From
                                        Bed To Commode / Toilet)
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Any Difficulty With Walking / Movement Such As
                              </p>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">On Ramps</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Gai (Walking)
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        On Level Surfaces
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">On Stairs</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        On Uneven Surfaces
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Any Difficulty With Self-Care Activities Such As
                              </p>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Bathing</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Dressing</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Toileting</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Any Difficulty With Home Management Such As
                              </p>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Household Chores
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Shopping</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Driving / Transporting
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Care Of Dependents
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="fs-5 fw-bold">
                                Any Difficulty With Community And Work
                                Activities Such As
                              </p>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Work</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">School</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Recreation</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Sport</p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Play Activities
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Current</p>
                                      <p className="fs-6">Prior</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-6"
                          className="tab-pane fade"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <table className="table">
                                <thead className="table-info table-striped table-bordered">
                                  <tr>
                                    <th>Relation</th>
                                    <th>Age (If Living)</th>
                                    <th>Age (If Death)</th>
                                    <th>Cause of Death</th>
                                    <th>Problems</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Brother</td>
                                    <td>56</td>
                                    <td>0</td>
                                    <td>NA</td>
                                    <td>High Blood Pressure</td>
                                  </tr>
                                  <tr>
                                    <td>Brother</td>
                                    <td>56</td>
                                    <td>0</td>
                                    <td>NA</td>
                                    <td>High Blood Pressure</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-7"
                          className="tab-pane fade"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <table className="table">
                                <thead className="table-info table-striped table-bordered">
                                  <tr>
                                    <th>Title</th>
                                    <th>Relation</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Test 1</td>
                                    <td>View</td>
                                  </tr>
                                  <tr>
                                    <td>Test 2</td>
                                    <td>View</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tabcontent" id="assesment">
                    <div className="card shadow-sm">
                      <div className="card flex-fill">
                        <div className="card-header">
                          <ul
                            role="tablist"
                            className="nav nav-tabs card-header-tabs"
                          >
                            <li className="nav-item">
                              <a
                                href="#tab-11"
                                data-bs-toggle="tab"
                                className="nav-link active"
                              >
                                General Information
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-12"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Social Histroy & Living Environment
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-13"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Employment Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-14"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Past Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-15"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Current Functional Status
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-16"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Family Medical History
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-17"
                                data-bs-toggle="tab"
                                className="nav-link"
                              >
                                Past Medical Records
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="tab-content pt-0">
                            <div
                              role="tabpanel"
                              id="tab-11"
                              className="tab-pane fade show active"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Race / Ethnicity -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Asian</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Language -</p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">English</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Highest Level of Edcuation -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Master Degree</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Hand Foot Dominance -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Right</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-12"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Where Do You Live?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Private Home</p>
                                      <p className="fs-6">Rented Home</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        With Whom Do You Live?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Alone</p>
                                      <p className="fs-6">Relative(s)</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Does Your Home Have?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">One Level</p>
                                      <p className="fs-6">Two Level</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        How Many Steps?
                                      </p>
                                    </div>
                                    <div className="item d-flex">
                                      <div className="item-inner me-3">
                                        <p className="fs-6 fw-bold">
                                          No. Steps Outside The Home -
                                        </p>
                                      </div>
                                      <div className="item-inner">
                                        <p>2</p>
                                      </div>
                                    </div>
                                    <div className="item d-flex">
                                      <div className="item-inner me-3">
                                        <p className="fs-6 fw-bold">
                                          No. Steps Inside The Home -
                                        </p>
                                      </div>
                                      <div className="item-inner">
                                        <p>2</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Do You Use?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Forearm Crutches</p>
                                      <p className="fs-6">Axillary Crutches</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Cultural / Religious
                                  </p>
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div className="item">
                                        <p className="fs-6 fw-bold">
                                          Any cultural or religious beliefs or
                                          wishes that might affect care?
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="item-inner">
                                        <p className="fs-6">
                                          Some quick example text to build on
                                          the card title and make up the bulk of
                                          the card&apos;s content. Some quick
                                          example text to build on the card
                                          title and make up the bulk of the
                                          card&apos;s content.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Social / Health Habits
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Do You Smoke Tobacco?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">No</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Do You Drink Alchohol?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">No</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Excercise?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            If yes how many times per week?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">10</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            How many minutes per day?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">20</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-13"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Work Status -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Work Full Time</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Occupation -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Businessman</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Your Work Involves (Check All That
                                        Apply)
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Prolonged Standing</p>
                                      <p className="fs-6">
                                        Working with bent neck
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-14"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="inner-item">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Past Medical History - Please Check If
                                        Anyone In Your Family Has Or Had Any Or
                                        The Following:
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Diabetes</p>
                                      <p className="fs-6">Genetic Disease</p>
                                      <p className="fs-6">Pacemaker</p>
                                      <p className="fs-6">AIDS</p>
                                      <p className="fs-6">Anemia</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Past Medical History - For Women Only:
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Pelvic Inflammatory Disease -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Trouble with Period -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Complicated Pregnancies -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Pregnant -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Endometriosis -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Any Other -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">
                                            Hello I am Fine
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Surgical History – Please List Any Surgeries
                                    You Had, And If Known Include Dates:
                                  </p>
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>First</td>
                                        <td>2022-01-18</td>
                                      </tr>
                                      <tr>
                                        <td>Second</td>
                                        <td>2022-01-14</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-md-12 mt-3">
                                  <div className="inner-item">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Diagnostic Test/Measures - Within The
                                        Past Year, Have You Had Any Of The
                                        Following (Check All That Apply):
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Bronchoscopy</p>
                                      <p className="fs-6">
                                        EMG/Nerve Conduction
                                      </p>
                                      <p className="fs-6">Angiogram</p>
                                      <p className="fs-6">Stool Test</p>
                                      <p className="fs-6">CT scan</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Medications & Allergies – Please Check Or
                                    List All Medications Or Allergies:
                                  </p>
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Medicine Name</th>
                                        <th>Medicine Dose</th>
                                        <th>Start Date</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Route</th>
                                        <th>Frequency</th>
                                        <th>Any Side Effect</th>
                                        <th>If Yes</th>
                                        <th>Allergies</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Cipcal</td>
                                        <td>500</td>
                                        <td>13/01/2022</td>
                                        <td>Continue</td>
                                        <td>Prescribed</td>
                                        <td>Oral</td>
                                        <td>2 times per day</td>
                                        <td>Yes</td>
                                        <td>Headech</td>
                                        <td>Rashes</td>
                                      </tr>
                                      <tr>
                                        <td>Cipcal</td>
                                        <td>500</td>
                                        <td>13/01/2022</td>
                                        <td>Continue</td>
                                        <td>Prescribed</td>
                                        <td>Oral</td>
                                        <td>2 times per day</td>
                                        <td>Yes</td>
                                        <td>Headech</td>
                                        <td>Rashes</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-15"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Current Functional
                                    Mobility
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Bed Mobility
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Transfers (Such As Bed To Chair,
                                            From Bed To Commode / Toilet)
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Walking / Movement Such
                                    As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Ramps
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Gai (Walking)
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Level Surfaces
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Stairs
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            On Uneven Surfaces
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Self-Care Activities
                                    Such As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Bathing
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Dressing
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Toileting
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Home Management Such As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Household Chores
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Shopping
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Driving / Transporting
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Care Of Dependents
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Any Difficulty With Community And Work
                                    Activities Such As
                                  </p>
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">Work</p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">School</p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Recreation
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">Sport</p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Play Activities
                                          </p>
                                        </div>
                                        <div className="item-multi d-flex align-items-center">
                                          <p className="fs-6">Current</p>
                                          <p className="fs-6">Prior</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-16"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Relation</th>
                                        <th>Age (If Living)</th>
                                        <th>Age (If Death)</th>
                                        <th>Cause of Death</th>
                                        <th>Problems</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Brother</td>
                                        <td>56</td>
                                        <td>0</td>
                                        <td>NA</td>
                                        <td>High Blood Pressure</td>
                                      </tr>
                                      <tr>
                                        <td>Brother</td>
                                        <td>56</td>
                                        <td>0</td>
                                        <td>NA</td>
                                        <td>High Blood Pressure</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-17"
                              className="tab-pane fade"
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Title</th>
                                        <th>Relation</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Test 1</td>
                                        <td>View</td>
                                      </tr>
                                      <tr>
                                        <td>Test 2</td>
                                        <td>View</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentId;
