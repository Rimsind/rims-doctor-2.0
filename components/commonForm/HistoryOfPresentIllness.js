import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../context";
import useSWR from "swr";
import { apiUrl } from "../../config/api";
const HistoryOfPresentIllness = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();

  const [slautation, setSalutation] = useState();
  const [cameTo, setCameTo] = useState();
  const [problem, setProblem] = useState();
  const [stated, setStated] = useState();
  const [hasDone, setHasDone] = useState();
  const [medication, setMedication] = useState();
  const [other, setOther] = useState();

  const { data } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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
  // const { patient } = data;
  // console.log(patient);

  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="gen-form">
          <div className="history-of-present-illness-content">
            <div className="row align-items-center">
              <div className="col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="Mr"
                  onChange={(e) => setSalutation(e.target.value)}
                />
                Mr. /
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="Mrs"
                  onChange={(e) => setSalutation(e.target.value)}
                />
                Mrs.
              </div>
              <div className="col-md-7">
                {data?.patient?.first_name} {data?.patient?.last_name} is a{" "}
                {data?.patient?.dob} Year Old {data?.patient?.gender}
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-md-5">
                <div className="row align-items-center">
                  <div className="col-md-4">came to the</div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCameTo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row align-items-center">
                  <div className="col-md-4">with a problem of</div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setProblem(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center mt-2">
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-3">Patient stated</div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setStated(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">Patient was done</div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setHasDone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-md-12">
                <div className="row align-items-center">
                  <div className="col-md-3">Patient current medication</div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setMedication(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-md-12">
                <div className="row align-items-center">
                  <div className="col-md-3">Other relevant factors are</div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setOther(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-para gen-form">
          <h3>Preview:</h3>

          <p>
            <strong>{slautation}</strong>.{" "}
            <strong>
              {data?.patient?.first_name} {data?.patient?.last_name}
            </strong>{" "}
            is a<strong> {data?.patient?.dob}</strong> y.o{" "}
            <strong>{data?.patient?.gender}</strong> came to the
            <strong> {cameTo} </strong>
            with a problem of
            <strong> {problem}</strong>. Patient stated
            <strong> {stated}</strong>. Patient was done
            <strong> {hasDone}</strong>. Patient current medication includes{" "}
            <strong>{medication}</strong>. Other relevant factors are{" "}
            <strong> {other}</strong>.
          </p>
        </div>

        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h6>Allergies</h6>
            </div>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
        </div>
        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h6>Vaccination</h6>
            </div>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
        </div>
        <div className="gen-form-btn">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
              <a href="#" className="btn btn-success">
                Save Changes
              </a>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;
