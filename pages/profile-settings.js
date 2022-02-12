import { Breadcrumb } from "components/common";
import useSWR from "swr";
import { useAuth } from "../context";
import { apiUrl } from "config/api";
import { ProfilePicture, ProfileInfo } from "components/doctorComponents";

const ProfileSettings = ({ doctor }) => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
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
        <Breadcrumb title="Profile Settings" />
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Personal Information</h5>
                  </div>
                  <ProfilePicture doctor={data} />
                  <ProfileInfo doctor={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
