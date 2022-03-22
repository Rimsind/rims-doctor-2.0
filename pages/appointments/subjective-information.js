import {
  AllergyCard,
  Breadcrumb,
  NotesCard,
  PatientDemographics,
} from "components/common";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import Link from "next/link";
import {
  CheifComplaints,
  FamilyHistory,
  FunctionalStatus,
  GeneralInfo,
  EmploymentStatus,
  MedicalHistory,
  SocialHistory,
  MedicalRecords,
} from "components/subjectiveForm";
import { useEffect, useState } from "react";

const SubjectiveInformation = () => {
  const { id } = useRouter().query;
  const { auth } = useAuth();

  // const [patientData, setPatientData] = useState({});

  // useEffect(async () => {
  //   const res = await axios.get(`${apiUrl}/appointments/${id}`, {
  //     headers: {
  //       authorization: `Bearer ${auth.token}`,
  //     },
  //   });

  //   const result = await res.data;
  //   return result, setPatientData(result);
  // }, []);

  const { data: patientData } = useSWR(
    `${apiUrl}/appointments/${id}`,
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
        <Breadcrumb title="Diagnosis" />
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
              <PatientDemographics patientInfo={patientData?.patient} />
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
                        id="defaultOpen"
                      >
                        <p className="fs-5 fw-bold text-light">
                          Subjective Informtion
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="tablinks diag-inner-content bg-primary pt-4 pb-1 text-center">
                        <Link
                          href={`/appointments/clinical-examination?id=${id}`}
                        >
                          <p className="fs-5 fw-bold text-light">
                            Clinical Assesment
                          </p>
                        </Link>
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
                            href="#tab-8"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            Chief Complaints
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-1"
                            data-bs-toggle="tab"
                            className="nav-link "
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
                          id="tab-8"
                          className="tab-pane fade show active"
                        >
                          {/* <CheifComplaints appointmentId={id} /> */}
                          <p>Cheif Complaints</p>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-1"
                          className="tab-pane fade  "
                        >
<<<<<<< HEAD
                          {/* <GeneralInfo
                            patientId={data?.patient?.id}
=======
                          <GeneralInfo
                            patientId={patientData?.patient?.id}
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                            generalInformation={
                              patientData?.patient?.generalInformation
                            }
<<<<<<< HEAD
                          /> */}
                          <p>General Info</p>
=======
                            updated_at={patientData?.updated_at}
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-2"
                          className="tab-pane fade"
                        >
<<<<<<< HEAD
                          {/* <SocialHistory
                            patientId={data?.patient?.id}
                            socialHistory={data?.patient?.socialHistory}
                          /> */}
                          <p>Social History</p>
=======
                          <SocialHistory
                            patientId={patientData?.patient?.id}
                            socialHistory={patientData?.patient?.socialHistory}
                            updated_at={patientData?.updated_at}
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-3"
                          className="tab-pane fade"
                        >
<<<<<<< HEAD
                          {/* <EmploymentStatus
                            patientId={data?.patient?.id}
                            employmentStatus={data?.patient?.employmentStatus}
                          /> */}
                          <p>Employment Status</p>
=======
                          <EmploymentStatus
                            patientId={patientData?.patient?.id}
                            employmentStatus={
                              patientData?.patient?.employmentStatus
                            }
                            updated_at={patientData?.updated_at}
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-4"
                          className="tab-pane fade"
                        >
<<<<<<< HEAD
                          {/* <MedicalHistory
                            patientId={data?.patient?.id}
                            medicalHistory={data?.patient?.medicalHistory}
                          /> */}
                          <p>Medical History</p>
=======
                          <MedicalHistory
                            patientId={patientData?.patient?.id}
                            medicalHistory={
                              patientData?.patient?.medicalHistory
                            }
                            updated_at={patientData?.updated_at}
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-5"
                          className="tab-pane fade"
                        >
<<<<<<< HEAD
                          {/* <FunctionalStatus
                            patientId={data?.patient?.id}
                            functionalStatus={data?.patient?.functionalStatus}
                          /> */}
                          <p>Functional Status</p>
=======
                          <FunctionalStatus
                            patientId={patientData?.patient?.id}
                            functionalStatus={
                              patientData?.patient?.functionalStatus
                            }
                            updated_at={patientData?.updated_at}
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-6"
                          className="tab-pane fade"
                        >
<<<<<<< HEAD
                          {/* <FamilyHistory
                            patientId={data?.patient?.id}
                            familyHistory={data?.patient?.familyHistory}
                          /> */}
                          <p>Family History</p>
=======
                          <FamilyHistory
                            patientId={patientData?.patient?.id}
                            familyHistory={patientData?.familyHistory}
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-7"
                          className="tab-pane fade"
                        >
<<<<<<< HEAD
                          {/* <MedicalRecords patientId={data?.patient?.id} /> */}
                          <p>Medical Records</p>
=======
                          <MedicalRecords
                            patientId={patientData?.patient?.id}
                            updated_at={patientData?.patient?.updated_at}
                            upload_medical_record={
                              patientData?.upload_medical_record
                            }
                          />
>>>>>>> 264838a07764326cfe809264a8605697bcc2bd6a
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

export default SubjectiveInformation;
