import React from "react";

const ClinicalAssessment = () => {
  const skin = [
    "No rashes or other changes",
    "No cyanosis",
    "No clubbing finger",
    "No bruises",
  ];
  const head = ["Checkbox"];
  const eyes = ["Checkbox"];
  const ears = ["Checkbox"];
  const nose = ["Checkbox"];
  const throat = ["Checkbox"];
  const neck = ["No lumps", "Goiter", "Pain", "No swollen glands"];
  const lymph_nodes = [
    "Small (less than 1 cm)",
    "Nontender",
    "Ns bilato axillary or epitrochlear nodes",
    "Soft and nontender",
    "Soft",
    "And mobile tonsillar and posterior cervical nodeerally",
    "Several small inguinal nodes bilateral",
  ];
  const respiratory_thorax_lungs = [
    "No cough",
    "Shortness of breath",
    "Thorax symmetric with good excursion",
    "Breath sounds vesicular with no added sounds",
    "Wheezing",
    "Last chest x-ray, 1986, St. Mary's Hospital; unremarkable",
    "Lungs resonant",
    "Diaphragms descend 4 cm bilaterally",
  ];
  const cardiovascular = [
    "No Known heart disease or high blood pressure",
    "No dyspnea",
    "Chest pain palpitation",
    "Jugular venous pressure 1 cm above the sternal angle",
    "Carotid upstrokes brisks",
    "Apical impulse discrete and tapping",
    "A II/VI medium-pitched midsystolic murmur at the 2nd right interspace",
    "Has never had an electrocardiogram (ECG)",
    "With head of examining table raised to 30 degree",
    "Without bruits",
    "Barely palpable in the 5th left interspace",
    "Good S1, S2; no S3 or S4",
    "Does not radiate to the neck",
    "Last blood pressure taken in 1998",
  ];
  const gastrointestinal = [
    "Appetite good",
    "Vomiting",
    "Bowel movement about once dial",
    "No diarrhea or bleeding",
    "Jaundice",
    "No nausea",
    "Indigestion",
    "Though sometimes has hard stools for 2 to 3 days when especially tense",
    "No pain",
    "Gallbladder or liver problems",
  ];
  const breast = [
    "No lumps",
    "Discharge",
    "Pain",
    "Does self-breast exam sporadically",
  ];

  const abdominal = [
    "Obese",
    "Right lower quadrant",
    "No tenderness or masses Liver span 7 cm in right midclavicular line",
    "Palpable 1 cm below right costal margin (RCM)",
    "No costovertebral angle tenderness (CVAT)",
    "Well-healed scar",
    "Bowel sounds active",
    "Edge smooth",
    "Spleen and kidneys not felts",
    "No hernia",
  ];

  const genitourinary = [
    "And poor relaxation",
    "Mild cystocele at introitus on straining",
    "Cervix pink",
    "And without dischandarge",
    "Midline",
    "Not enlarged",
    "Pap smear taken",
    "No cervical or adnexal tendernesExternal genitalia without lesions",
    "Vaginal mucosa pink",
    "Parous",
    "Uterus anterior",
    "Smooth",
    "Adnexa not palpated due to obesity as",
    "Rectovaginal wall intact",
  ];
  const rectal = [
    "Rectal vault without masses",
    "Negative for occult blood",
    "Stool Brown",
  ];
  const peripheral_vascular = [
    "Trace edema at both ankels",
    "No stasis pigmentation or ulcer",
    "Moderate varicosities of saphenous veins both lower extremities",
    "Pulses (2+= brisks, or nornal)",
  ];
  const neurogenical = [
    "Mental status",
    "Thoughts coherent",
    "Place",
    "Cranial Nerves",
    "Motor",
    "Strength 5/5 throughout(see p.574 grading system)",
    "Rapid alternating movements (RAMs)",
    "Gait",
    "Pinprick",
    "Position sense",
    "And stereognosis intact",
    "Reflexes",
    "Depending upon personal preference",
    "As shown below and at right",
    "See p",
    "Tense but alrt and cooperative",
    "Oriented to person",
    "And time",
    "II-XII intact",
    "Good muscle bulk and tone",
    "Cerebellar",
    "Point-to-point movemstableents intact",
    "Fluid Sensory",
    "Light touch",
    "Vibration",
    "Romberg negativeg",
    "Two methods of recording may be used",
    "A tabular from or a stick picture diagram",
    "2+= brisk or normal",
    "587 for grading system",
  ];
  const hematological = ["No easy bleeding", "No anemia"];
  const endocrinal = [
    "No known thyroid problem or temperature intolerance",
    "No symptoms or history of diabetes",
  ];
  const psychological_psychiatric_illness = [
    "No history of depression or treatment for psychiatric disorders",
  ];
  return (
    <>
      <div className="genral-information-form">
        <p className="fs-4 fw-bold text-center border-bottom">
          Clinical Examination (Neurology)
        </p>
        <div className="gen-form border-bottom mb-3">
          <p className="fs-5 fw-bold">Examination Categories</p>
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="first-item mb-2">
                <label className="fs-6 mb-2">Categories</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select any one</option>
                  <option>Mental Status Examination</option>
                  <option>Cranial Nerve Examination</option>
                  <option>Motor System</option>
                  <option>Deep Tandon Reflexes</option>
                  <option>Sensation</option>
                  <option>Cerebellum</option>
                </select>
              </div>
              <div className="second-item mb-2">
                <label className="fs-6 mb-2">Test</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select any one</option>
                  <option>Mental Status Examination</option>
                  <option>Cranial Nerve Examination</option>
                  <option>Motor System</option>
                  <option>Deep Tandon Reflexes</option>
                  <option>Sensation</option>
                  <option>Cerebellum</option>
                </select>
              </div>
              <div className="add-btn-clini-exam mb-3">
                <button className="btn btn-success">Add Items</button>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Categories</th>
                      <th scope="col">Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="bg-danger text-light text-center"
                        colSpan="2"
                      >
                        Data not found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form">
          <p className="fs-5 fw-bold">Assessment</p>
          <input type="text" className="form-control" placeholder="Other:" />
        </div>
        <div className="save-btn-clini-exam-neuro mt-3 text-end">
          <button className="btn btn-success">Save Changes</button>
        </div>
        <p className="fs-4 fw-bold text-center border-bottom">
          Clinical Examination (Orthopedic)
        </p>
        <div className="gen-form border-bottom mb-3">
          <p className="fs-5 fw-bold">Examination Categories</p>
          <div className="row align-items-center">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="first-item mb-2">
                    <label className="fs-6 mb-2">Categories</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select any one</option>
                      <option>Mental Status Examination</option>
                      <option>Cranial Nerve Examination</option>
                      <option>Motor System</option>
                      <option>Deep Tandon Reflexes</option>
                      <option>Sensation</option>
                      <option>Cerebellum</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="second-item mb-2">
                    <label className="fs-6 mb-2">Other</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="first-item mb-2">
                    <label className="fs-6 mb-2">Test</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select any one</option>
                      <option>Mental Status Examination</option>
                      <option>Cranial Nerve Examination</option>
                      <option>Motor System</option>
                      <option>Deep Tandon Reflexes</option>
                      <option>Sensation</option>
                      <option>Cerebellum</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="second-item mb-2">
                    <label className="fs-6 mb-2">Other</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="add-btn-clini-exam mb-3">
                <button className="btn btn-success">Add Items</button>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Categories</th>
                      <th scope="col">Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="bg-danger text-light text-center"
                        colSpan="2"
                      >
                        Data not found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form">
          <p className="fs-5 fw-bold">Assessment</p>
          <input type="text" className="form-control" placeholder="Other:" />
        </div>
        <div className="save-btn-clini-exam-neuro mt-3 text-end">
          <button className="btn btn-success">Save Changes</button>
        </div>
        <p className="fs-4 fw-bold text-center border-bottom">
          Clinical Examination (Medicine)
        </p>
        <div className="gen-form border-bottom mb-3">
          <ul
            role="tablist"
            className="nav nav-tabs card-header-tabs pt-3 ps-2 bg-info"
          >
            <li className="nav-item">
              <a
                href="#tab-2"
                data-bs-toggle="tab"
                className="nav-link active text-dark fs-6 fw-bold"
              >
                Skin
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-21"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Head
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-22"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Eyes
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-23"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Ears
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-24"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Nose
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-25"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Throat
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-4"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Neck
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-5"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Lymph Nodes
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-6"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Respiratory, Thorax & Lungs
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-7"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Cardiovascular
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-8"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Gastrointestinal
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-9"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Breasts
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-10"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Abdominal
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-51"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Genitourinary
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-52"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Rectal
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-53"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Peripheral Vascular
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-54"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Neurological
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-55"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Hematological
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-56"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Endocrinal
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tab-57"
                data-bs-toggle="tab"
                className="nav-link text-dark fs-6 fw-bold"
              >
                Psychological & Psychiatric Illness
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              role="tabpanel"
              id="tab-2"
              className="tab-pane fade show active py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Skin</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {skin.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-21"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <p className="fs-5 fw-bold">Head</p>
              <div className="row align-items-center mb-3">
                <div className="col-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select any one</option>
                    {head.map((items, index) => (
                      <option value={items} key={index}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-5">
                  <div className="items">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="items text-end">
                    <button className="btn btn-primary">Add Items</button>
                  </div>
                </div>
              </div>
              <div className="section-content-table p-2 bg-light">
                <table className="table table-borderless table-striped">
                  <thead className="table-primary">
                    <tr>
                      <th className="text-center" colSpan="2">
                        Title
                      </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">
                          <i className="far fa-window-close text-danger"></i>
                        </a>
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-22"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <p className="fs-5 fw-bold">Eyes</p>
              <div className="row align-items-center mb-3">
                <div className="col-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select any one</option>
                    {eyes.map((items, index) => (
                      <option value={items} key={index}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-5">
                  <div className="items">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="items text-end">
                    <button className="btn btn-primary">Add Items</button>
                  </div>
                </div>
              </div>
              <div className="section-content-table p-2 bg-light">
                <table className="table table-borderless table-striped">
                  <thead className="table-primary">
                    <tr>
                      <th className="text-center" colSpan="2">
                        Title
                      </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">
                          <i className="far fa-window-close text-danger"></i>
                        </a>
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-23"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <p className="fs-5 fw-bold">Ears</p>
              <div className="row align-items-center mb-3">
                <div className="col-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select any one</option>
                    {ears.map((items, index) => (
                      <option value={items} key={index}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-5">
                  <div className="items">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="items text-end">
                    <button className="btn btn-primary">Add Items</button>
                  </div>
                </div>
              </div>
              <div className="section-content-table p-2 bg-light">
                <table className="table table-borderless table-striped">
                  <thead className="table-primary">
                    <tr>
                      <th className="text-center" colSpan="2">
                        Title
                      </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">
                          <i className="far fa-window-close text-danger"></i>
                        </a>
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-24"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <p className="fs-5 fw-bold">Nose</p>
              <div className="row align-items-center mb-3">
                <div className="col-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select any one</option>
                    {nose.map((items, index) => (
                      <option value={items} key={index}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-5">
                  <div className="items">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="items text-end">
                    <button className="btn btn-primary">Add Items</button>
                  </div>
                </div>
              </div>
              <div className="section-content-table p-2 bg-light">
                <table className="table table-borderless table-striped">
                  <thead className="table-primary">
                    <tr>
                      <th className="text-center" colSpan="2">
                        Title
                      </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">
                          <i className="far fa-window-close text-danger"></i>
                        </a>
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-25"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <p className="fs-5 fw-bold">Throat (HEENT)</p>
              <div className="row align-items-center mb-3">
                <div className="col-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select any one</option>
                    {throat.map((items, index) => (
                      <option value={items} key={index}>
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-5">
                  <div className="items">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="items text-end">
                    <button className="btn btn-primary">Add Items</button>
                  </div>
                </div>
              </div>
              <div className="section-content-table p-2 bg-light">
                <table className="table table-borderless table-striped">
                  <thead className="table-primary">
                    <tr>
                      <th className="text-center" colSpan="2">
                        Title
                      </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">
                          <i className="far fa-window-close text-danger"></i>
                        </a>
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-4"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Neck</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {neck.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-5"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Lymph Nodes</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {lymph_nodes.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-6"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Respiratory, Thorax & Lungs</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {respiratory_thorax_lungs.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-7"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Cardiovascular</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {cardiovascular.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-8"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Gastrointestinal</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {gastrointestinal.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-9"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Breasts</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {breast.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-10"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Abdominal</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {abdominal.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-51"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Genitourinary</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {genitourinary.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-52"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Rectal</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {rectal.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-53"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Peripheral Vascular</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {peripheral_vascular.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-54"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Neurological</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {neurogenical.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-55"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Hematological</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {hematological.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-56"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">Endocrinal</p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {endocrinal.map((items, index) => (
                          <option value={items} key={index}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="tab-57"
              className="tab-pane fade py-4"
              style={{
                background: "#0dcaf030",
                paddingLeft: "20px",
                marginLeft: "-9px",
                marginRight: "-8px",
                paddingRight: "20px",
              }}
            >
              <div className="section-content pb-3 border-bottom">
                <div className="section-item mt-3">
                  <p className="fs-6 fw-bold">
                    Psychological & Psychiatric Illness
                  </p>
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select any one</option>
                        {psychological_psychiatric_illness.map(
                          (items, index) => (
                            <option value={items} key={index}>
                              {items}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="col-5">
                      <div className="items">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items text-end">
                        <button className="btn btn-primary">Add Items</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-content-table">
                    <table className="table table-borderless table-striped">
                      <thead className="table-primary">
                        <tr>
                          <th className="text-center" colSpan="2">
                            Title
                          </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <i className="far fa-window-close text-danger"></i>
                            </a>
                          </td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="fs-4 fw-bold text-center border-bottom">
          Clinical Examination (Rehab)
        </p>
        <div className="gen-form border-bottom mb-3">
          <div className="row justify-content-between align-items-start mb-3">
            <div className="col-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <p className="fs-6 fw-bold">
                Aerobic capacity during bed mobility (modified borg RPE scale)
              </p>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <select
                className="form-select"
                aria-label="default select example"
              >
                <option selected>Select Score</option>
                <option value="1">0 - Nothing at all</option>
                <option value="2">0.5 - Just noticeable</option>
                <option value="3">1 - Very light</option>
                <option value="4">2 - Light</option>
                <option value="5">3 - Moderate</option>
                <option value="6">4 - Somewhat heavy</option>
                <option value="7">5 - Heavy</option>
                <option value="8">6</option>
                <option value="9">7 - Very heavy</option>
                <option value="10">8</option>
                <option value="11">9</option>
                <option value="12">10 - Very, very heavy</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-between align-items-start mb-3">
            <div className="col-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <p className="fs-6 fw-bold">
                Aerobic capacity during transfer task (modified borg RPE scale)
              </p>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <select
                className="form-select"
                aria-label="default select example"
              >
                <option selected>Select Score</option>
                <option value="1">0 - Nothing at all</option>
                <option value="2">0.5 - Just noticeable</option>
                <option value="3">1 - Very light</option>
                <option value="4">2 - Light</option>
                <option value="5">3 - Moderate</option>
                <option value="6">4 - Somewhat heavy</option>
                <option value="7">5 - Heavy</option>
                <option value="8">6</option>
                <option value="9">7 - Very heavy</option>
                <option value="10">8</option>
                <option value="11">9</option>
                <option value="12">10 - Very, very heavy</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-between align-items-start mb-3">
            <div className="col-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <p className="fs-6 fw-bold">
                Aerobic capacity during Ambulation task (modified borg RPE
                scale)
              </p>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <select
                className="form-select"
                aria-label="default select example"
              >
                <option selected>Select Score</option>
                <option value="1">0 - Nothing at all</option>
                <option value="2">0.5 - Just noticeable</option>
                <option value="3">1 - Very light</option>
                <option value="4">2 - Light</option>
                <option value="5">3 - Moderate</option>
                <option value="6">4 - Somewhat heavy</option>
                <option value="7">5 - Heavy</option>
                <option value="8">6</option>
                <option value="9">7 - Very heavy</option>
                <option value="10">8</option>
                <option value="11">9</option>
                <option value="12">10 - Very, very heavy</option>
              </select>
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mb-3">
          <div className="row justify-content-between align-items-start">
            <div className="col-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
              <p className="fs-6 fw-bold">
                Aerobic Capacity during standarized test includes
              </p>
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Select Test</option>
                <option value="1">3 Mint Walk Test</option>
                <option value="2">6 Mint Walk Test</option>
                <option value="3">9 Mint Walk Test</option>
                <option value="4">12 Mint Walk Test</option>
                <option value="5">Treadmill Test</option>
                <option value="6">WC Mobility Test</option>
                <option value="7">Step Test</option>
              </select>
            </div>
            <div className="col-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
              <p className="fs-6 fw-bold text-center">at RPE</p>
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Select Score</option>
                <option value="1">0 - Nothing at all</option>
                <option value="2">0.5 - Just noticeable</option>
                <option value="3">1 - Very light</option>
                <option value="4">2 - Light</option>
                <option value="5">3 - Moderate</option>
                <option value="6">4 - Somewhat heavy</option>
                <option value="7">5 - Heavy</option>
                <option value="8">6</option>
                <option value="9">7 - Very heavy</option>
                <option value="10">8</option>
                <option value="11">9</option>
                <option value="12">10 - Very, very heavy</option>
              </select>
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mb-3">
          <p className="fs-5 fw-bold">
            Cardiovascular and pulmonary signs and symptoms related to increase
            oxygen demand
          </p>

          <div className="row justify-centent-between align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Blood pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Breath & voice sounds</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select </option>
                        <option value="1">Normal</option>
                        <option value="2">Abnormal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Heart Rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Cyanosis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select Cyanosis </option>
                        <option value="1">Central Cyanosis</option>
                        <option value="2">Peripheral Cyanosis</option>
                        <option value="3">Differential Cyanosis</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Rhythm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select</option>
                        <option value="1">Normal</option>
                        <option value="2">Abnormal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Gas Exchange</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select</option>
                        <option value="1">Normal</option>
                        <option value="2">Abnormal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Sounds</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select </option>
                        <option value="1">Normal</option>
                        <option value="2">Abnormal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Respiratory pattern</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select </option>
                        <option value="1">Apnea</option>
                        <option value="2">Eupnea</option>
                        <option value="3">Orthopnea</option>
                        <option value="4">Dyspnea</option>
                        <option value="5">Hyperpnea</option>
                        <option value="6">Hyperventilation</option>
                        <option value="7">Hypoventilation</option>
                        <option value="8">
                          TachypneaKussmaul&apos;s respiration
                        </option>
                        <option value="9">Cheyne-stokes respiration</option>
                        <option value="10">Blot&apos;s respiration</option>
                        <option value="11">Apneustic breathing</option>
                        <option value="12">
                          Central neurogenic hyperventilation
                        </option>
                        <option value="13">
                          Central neurogenic hypoventilation
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Angina</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select </option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Respiratory Rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Claudication</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select </option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Respiratory Rhythm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select </option>
                        <option value="1">Normal</option>
                        <option value="2">Abnormal</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="space-x-4">Oximetry (%)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gen-form border-bottom mb-3">
          <div className="row justify-centent-between align-items-center mb-3">
            <div className="col-md-3">
              <p className="fs-5 fw-bold">Identified Problems</p>
            </div>
            <div className="col-md-9">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Describe your problems here"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mb-3">
          <div className="row align-items-start mb-3">
            <div className="col-md-3">
              <p className="fs-5 fw-bold">Short Term Goals </p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate aerobic capacity for bed mobility
                    task to
                  </label>
                </div>
                <div className="col-md-5">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate aerobic capacity for transfer task
                    to
                  </label>
                </div>
                <div className="col-md-5">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate aerobic capacity for ambulation
                    task to
                  </label>
                </div>
                <div className="col-md-5">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <div className="row justify-content-between align-items-start">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate during standarized
                  </label>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Test</option>
                    <option value="1">3 Mint Walk Test</option>
                    <option value="2">6 Mint Walk Test</option>
                    <option value="3">9 Mint Walk Test</option>
                    <option value="4">12 Mint Walk Test</option>
                    <option value="5">Treadmill Test</option>
                    <option value="6">WC Mobility Test</option>
                    <option value="7">Step Test</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <p className="fs-6 fw-bold text-center">at RPE</p>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <textarea
                className="form-control"
                placeholder="Describe your problems here"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mb-3">
          <div className="row align-items-start mb-3">
            <div className="col-md-3">
              <p className="fs-5 fw-bold">Long Term Goals </p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate aerobic capacity for bed mobility
                    task to
                  </label>
                </div>
                <div className="col-md-5">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate aerobic capacity for transfer task
                    to
                  </label>
                </div>
                <div className="col-md-5">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate aerobic capacity for ambulation
                    task to
                  </label>
                </div>
                <div className="col-md-5">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <div className="row justify-content-between align-items-start">
                <div className="col-md-7">
                  <label className="mb-3">
                    Patients will demonstrate during standarized
                  </label>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Test</option>
                    <option value="1">3 Mint Walk Test</option>
                    <option value="2">6 Mint Walk Test</option>
                    <option value="3">9 Mint Walk Test</option>
                    <option value="4">12 Mint Walk Test</option>
                    <option value="5">Treadmill Test</option>
                    <option value="6">WC Mobility Test</option>
                    <option value="7">Step Test</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <p className="fs-6 fw-bold text-center">at RPE</p>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Select Score</option>
                    <option value="1">0 - Nothing at all</option>
                    <option value="2">0.5 - Just noticeable</option>
                    <option value="3">1 - Very light</option>
                    <option value="4">2 - Light</option>
                    <option value="5">3 - Moderate</option>
                    <option value="6">4 - Somewhat heavy</option>
                    <option value="7">5 - Heavy</option>
                    <option value="8">6</option>
                    <option value="9">7 - Very heavy</option>
                    <option value="10">8</option>
                    <option value="11">9</option>
                    <option value="12">10 - Very, very heavy</option>
                  </select>
                </div>
              </div>
              <textarea
                className="form-control"
                placeholder="Describe your problems here"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mb-3">
          <div className="row align-items-start mb-3">
            <div className="col-md-3">
              <p className="fs-5 fw-bold">Treatment Plan </p>
            </div>
            <div className="col-md-9">
              <div className="row align-items-start">
                <div className="col-md-4">
                  <label className="mb-3 fw-bold">
                    Aerobic capacity retraining for
                  </label>
                </div>
                <div className="col-md-8">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">Bed Mobility Task</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">Transfer Task</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">ADL Task</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">IADL Task</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">Ambulation Task</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">Treadmill Task</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">Step Test Task</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="check-item">
                        <input type="checkbox" className="form-check-input" />
                        <label className="ps-2">Wheelchair Mobility Task</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Describe your problems here"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalAssessment;
