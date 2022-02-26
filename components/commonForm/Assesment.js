import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl, fetcher } from "../../config/api";
import useSWR from "swr";
const Assesment = () => {
  const { appointmentId } = useRouter().query;
  const [icd, setIcd] = useState();

  const { data } = useSWR(
    `http://icd10api.com/?s=${icd}&desc=short&r=json`,
    fetcher
  );

  const searchResult = data?.Search;

  const { register, handleSubmit } = useForm();
  const submitAssesment = async (data, event) => {
    event.preventDefault();
    const payload = {
      assesment: {
        clinicalInvestigation: data.clinicalInvestigation,
        diagnosis: allIcd,
        treatmentPlan: data.treatmentPlan,
      },
    };
    console.log(payload);
  };
  return (
    <>
      <div className="general-information-form">
        <form onSubmit={handleSubmit(submitAssesment)}>
          <div className="gen-form">
            <p className="fs-5 fw-bold">Problems List</p>
            <div className="gen-form-table table-responsive">
              <table className="table table-striped">
                <thead className="bg-info">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-danger text-center text-light"
                    >
                      Data not found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <p className="fs-5 fw-bold">Clinical Investigation</p>
              </div>
              <div className="col-12 col-md-9 co-lg-9 col-xl-9 col-xxl-9">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Describe your problems here"
                  {...register("clinicalInvestigation")}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="gen-form">
            <p className="fs-5 fw-bold">Medical Diagnosis</p>

            <div className="row align-items-end mt-3">
              <div className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder=""
                  value={icd}
                  onChange={(e) => setIcd(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <p className="text-muted">
                  i.e.Type medicine name and select medicine.
                </p>
              </div>

              <div className="col-md-12">
                <ul
                  className="bg-light ms-1 w-50"
                  // style={{ marginLeft: "1px", width: "700px" }}
                >
                  {data?.Search?.map((items, index) => (
                    <li key={index} className="list-unstyled border-bottom">
                      <div className="d-grid gap-2">
                        <button className="btn btn-outline-primary border-0 text-start">
                          {items?.Name} : {items?.Description}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="rfa-gen-form-data-table table-responsive mt-4">
            <table className="table table-striped">
              <thead className="bg-info">
                <tr>
                  <th scope="col">Sl.</th>
                  <th scope="col"> Medical Diagnosis List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="bg-danger text-center text-light">
                    Data not found
                  </td>
                </tr>
                {/* {allIcd.map((items, index) => (
                        <tr key={index}>
                          <th scope="row">*</th>
                          <td>{items.diagnosis}</td>
                        </tr>
                      ))} */}
              </tbody>
            </table>
          </div>
          <div className="gen-form mt-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <p className="fs-5 fw-bold">Treatment Plan </p>
              </div>
              <div className="col-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Describe your problems here"
                  {...register("treatmentPlan")}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="gen-form-btn mt-4 text-end">
            <button className="btn btn-success" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Assesment;
