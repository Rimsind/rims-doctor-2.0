import {
  AllergyCard,
  Breadcrumb,
  NotesCard,
  PatientDemographics,
} from "components/common";
const MyPatientId = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Breadcrumb title="My Patients" />
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12 col-md-7"></div>
              <div className="col-md-5 col-sm-12">
                <div className="patient-btn-group d-flex justify-content-end">
                  <div className="btn-group-item me-2 shadow-sm">
                    <button className="btn btn-success">
                      Print Clinical Report
                    </button>
                  </div>
                  <div className="btn-group-item ms-2 shadow-sm">
                    <button className="btn btn-danger">
                      Print E-Prescription
                    </button>
                  </div>
                </div>
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
              <div className="card shadow-sm">
                <div className="card flex-fill">
                  <div className="card-header">
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
                          Past Medical History
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#tab-5"
                          data-bs-toggle="tab"
                          className="nav-link"
                        >
                          Current Functional Status
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
                      <div role="tabpanel" id="tab-2" className="tab-pane fade">
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
                                <p className="fs-6 fw-bold">How Many Steps?</p>
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
                            <p className="fs-5 fw-bold">Cultural / Religious</p>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="item">
                                  <p className="fs-6 fw-bold">
                                    Any cultural or religious beliefs or wishes
                                    that might affect care?
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-7">
                                <div className="item-inner">
                                  <p className="fs-6">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the
                                    cardcard&apos;s content. Some quick example
                                    text to build on the card title and make up
                                    the bulk of the card&apos;s content.
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
                      <div role="tabpanel" id="tab-3" className="tab-pane fade">
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
                      <div role="tabpanel" id="tab-4" className="tab-pane fade">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="inner-item">
                              <div className="item">
                                <p className="fs-6 fw-bold">
                                  Past Medical History - Please Check If Anyone
                                  In Your Family Has Or Had Any Or The
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
                                    <p className="fs-6 fw-bold">Any Other -</p>
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
                              Surgical History ??? Please List Any Surgeries You
                              Had, And If Known Include Dates:
                            </p>
                            <div className="table-sm-responsive table-md-responsive table-lg-responsive">
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
                          </div>
                          <div className="col-md-12 mt-3">
                            <div className="inner-item">
                              <div className="item">
                                <p className="fs-6 fw-bold">
                                  Diagnostic Test/Measures - Within The Past
                                  Year, Have You Had Any Of The Following (Check
                                  All That Apply):
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
                              Medications & Allergies ??? Please Check Or List All
                              Medications Or Allergies:
                            </p>
                            <div className=" table-responsive-lg table-responsive-md table-responsive-sm">
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
                      </div>
                      <div role="tabpanel" id="tab-5" className="tab-pane fade">
                        <div className="row">
                          <div className="col-md-12">
                            <p className="fs-5 fw-bold">
                              Any Difficulty With Current Functional Mobility
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="inner-item d-flex align-items-center justify-content-between">
                                  <div className="item">
                                    <p className="fs-6 fw-bold">Bed Mobility</p>
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
                                      Transfers (Such As Bed To Chair, From Bed
                                      To Commode / Toilet)
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
                              Any Difficulty With Community And Work Activities
                              Such As
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
                      <div role="tabpanel" id="tab-6" className="tab-pane fade">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive-lg table-responsive-md table-responsive-sm">
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
                      </div>
                      <div role="tabpanel" id="tab-7" className="tab-pane fade">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive-lg table-responsive-md table-responsive-sm">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPatientId;
