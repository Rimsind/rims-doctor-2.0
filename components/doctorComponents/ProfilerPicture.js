import { useState } from "react";
import { uploadImage } from "utils/uploadImage";
import { useAuth } from "context/index";
import { apiUrl } from "config/api";
import axios from "axios";
const ProfilePicture = ({ doctor }) => {
  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState();

  const uploadProfileImage = async () => {
    setLoading(true);
    const image = await uploadImage(profileImage, auth.token);

    const payload = {
      image,
    };
    const response = await axios.put(
      `${apiUrl}/doctors/${auth.user.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await response.data;
    alert("Image uploaded succesfully");
    setLoading(false);
    return result;
  };
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-sm">
            <form className="needs-validation">
              <div className="form-row row align-items-center">
                <div className="col-md-2">
                  <div className="form-group">
                    <img
                      className="rounded-circle"
                      alt="User Image"
                      src={doctor?.image?.url || "/images/profile.png"}
                      width="200rem"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fs-4 fw-bold">Upload Your Picture</label>
                    <input
                      type="file"
                      className="form-control"
                      name="uploadFile"
                      required=""
                      onChange={(e) => setProfileImage(e.target.files[0])}
                    />
                    <small className="text-secondary">
                      Recommended image size is
                      <b>150px x 150px</b>
                    </small>
                  </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <input
                    type="submit"
                    className="btn btn-primary px-4 py-2 fs-5 shadow-sm"
                    value={loading ? "loading..." : "upload"}
                    disabled={loading}
                    onClick={uploadProfileImage}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
