import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  convertToBase64,
  getParticipantDetailsByUserId,
  storeTeam,
} from "../../redux/action";

const TeamRegister = () => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [image, setImage] = useState();
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { participant_details_by_user_id } = useSelector(
    (state) => state.participantDetailsByUserId
  );

  useEffect(() => {
    dispatch(getParticipantDetailsByUserId(user?.id));
  }, [user]);

  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  async function reduce_image_file_size(
    image,
    MAX_WIDTH = 96,
    MAX_HEIGHT = 96
  ) {
    let resized_base64 = await new Promise((resolve) => {
      let img = new Image();
      img.src = image;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
    });
    return resized_base64;
  }

  const store = (e) => {
    e.preventDefault();

    reduce_image_file_size(image).then((res) => {
      const form = {
        name,
        type,
        image: res,
        user_id: user?.id,
      };

      storeTeam(form)
        .then((res) => {
          toast.success(res.message);
          navigate("/dashboard");
        })
        .catch((err) => {
          if (err.data) {
            setErrors(err.data);
          } else {
            toast.error(err.message);
          }
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Registrasi Tim</title>
      </Helmet>
      <div className="row">
        <div className="col m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <span class="card-title center">Registrasi Tim</span>
              <form onSubmit={store}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label>Nama Tim</label>
                    <div className="red-text">{errors?.name}</div>
                  </div>
                  <div className="input-field col s12">
                    <div>Tipe</div>
                    <div className="row">
                      {participant_details_by_user_id?.map((value, index) =>
                        value.type === "run" ? (
                          <div className="col">
                            <label>
                              <input
                                type="radio"
                                value="run"
                                name="type"
                                onChange={(e) => {
                                  setType(e.target.value);
                                }}
                              />
                              <span>Lari</span>
                            </label>
                          </div>
                        ) : (
                          <div className="col">
                            <label>
                              <input
                                type="radio"
                                value="ride"
                                name="type"
                                onChange={(e) => {
                                  setType(e.target.value);
                                }}
                              />
                              <span>Gowes</span>
                            </label>
                          </div>
                        )
                      )}
                    </div>
                    <div className="red-text">{errors?.type}</div>
                  </div>
                  <div className="input-field col s12">
                    <span>
                      Unggah / Upload Avatar Tim{" "}
                      <span className="red-text">*format: jpeg, jpg, png</span>
                    </span>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>File</span>
                        <input
                          type="file"
                          label="Image"
                          accept=".jpeg, .png, .jpg"
                          className="custom-file-input"
                          onChange={(e) => {
                            handleFileUpload(e);
                          }}
                        />
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                      </div>
                      <div className="red-text">
                        {errors?.image
                          ? "Size gambar terlalu besar, silahkan resize"
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="input-field col s12">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
              <Link to="/dashboard">Kembali Ke Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamRegister;
