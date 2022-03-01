import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../context";
import useSWR from "swr";
import { apiUrl } from "../../config/api";
const HistoryOfPresentIllness = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();

  return (
    <>
      <div className="general-information-form">
        <div className="gen-form border-bottom">
          <div className="row align-items-center mb-2">
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <p className="fs-6">
                <span className="fw-bold">Mr. Sujata Barman</span> is a
                <span className="fw-bold"> 20</span> year old Male
              </p>
            </div>
            <div className="col-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
              <p className="fs-6">came to the</p>
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <input
                type="text"
                className="form-control"
                placeholder="hospital"
              />
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <p className="fs-6">with a problem of</p>
            </div>
            <div className="col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <p className="fs-6">Patient stated</p>
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <p className="fs-6">Patient was done</p>
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <p className="fs-6">Patient current medication</p>
            </div>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <p className="fs-6">Other relevant factors are</p>
            </div>
            <div className="col-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mt-2 mb-2">
          <p className="fs-5 fw-bold">Preview:</p>
          <p className="fs-6">
            <span className="fw-bold">Mr. Sujata Barman</span> is a
            <span className="fw-bold"> 20</span> years of old
            <span className="fw-bold"> Male</span> came to the with a problem
            of. Patient stated. Patient was done. Patient current medication
            includes. Other relevant factors are.
          </p>
        </div>
        <div className="gen-form border-bottom mb-2">
          <div className="row align-items-center">
            <div className="col-3">
              <p className="fs-5 fw-bold">Allergies:</p>
            </div>
            <div className="col-9">
              <p>Hello World</p>
            </div>
          </div>
        </div>
        <div className="gen-form border-bottom mb-2">
          <div className="row align-items-center">
            <div className="col-3">
              <p className="fs-5 fw-bold">Vaccination:</p>
            </div>
            <div className="col-9">
              <p>Hello World</p>
            </div>
          </div>
        </div>
        <div className="genform-save-btn text-end">
          <button className="btn btn-success">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;
