import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import {
  convertToBase64,
  getParticipantsByUserId,
  getUser,
  uploadPaymentProof,
} from "../../redux/action";
import { Helmet } from "react-helmet";

const PaymentStatus = () => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParticipantsByUserId(user.id));
  }, [dispatch]);

  const { participants_by_user_id } = useSelector(
    (state) => state.participantsByUserId
  );

  const [type, setType] = useState();
  const [image, setImage] = useState();
  const [errors, setErrors] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const storeUploadPaymentProof = (e) => {
    e.preventDefault();

    const form = {
      user_id: user?.id,
      type,
      payment_proof: image,
    };

    uploadPaymentProof(form)
      .then((res) => {
        toast.success(res.message);
        dispatch(getUser());
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.data) {
          setErrors(err.data);
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Payment Status</title>
      </Helmet>
      {participants_by_user_id.length > 0 ? (
        <>
          {participants_by_user_id?.map((value, index) => (
            <div className="row">
              <div className="col s12 m6 offset-m3 l6 offset-l3">
                <div className="card">
                  <div className="card-content">
                    <span class="card-title">Status Pembayaran</span>
                    <table>
                      <tbody>
                        <tr>
                          <td>Tipe</td>
                          <td>:</td>
                          <td style={{ fontWeight: 700 }}>
                            {value.type.toUpperCase()}
                          </td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>:</td>
                          <td>
                            {" "}
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(parseInt(value.amount))}
                          </td>
                        </tr>
                        <tr>
                          <td>Status</td>
                          <td>:</td>
                          <td>
                            {value.verified ? (
                              "Sudah diverifikasi"
                            ) : (
                              <span style={{ color: "red" }}>
                                Belum diverifikasi
                              </span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Diverifikasi</td>
                          <td>:</td>
                          <td>{value.admin?.name ? value.admin.name : "-"}</td>
                        </tr>
                        <tr>
                          <td>Bukti Pembayaran</td>
                          <td>:</td>
                          <td>
                            {value.payment_proof ? (
                              <img
                                src={`${value.payment_proof}`}
                                className="responsive-img"
                              />
                            ) : (
                              <>
                                <div>
                                  Silahkan melakukan pembayaran sebesar{" "}
                                  <span style={{ fontWeight: 700 }}>
                                    {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                    }).format(parseInt(value.amount))}
                                  </span>{" "}
                                  ke rekening berikut,
                                </div>
                                <div>
                                  BCA : 0083764055 a/n Nuansa Cerah Informasi
                                </div>
                              </>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Gap height={25} />
                    <form onSubmit={storeUploadPaymentProof}>
                      <span>Upload Bukti Pembayaran</span>
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
                              setType(value.type);
                            }}
                          />
                        </div>
                        <div class="file-path-wrapper">
                          <input class="file-path validate" type="text" />
                        </div>
                        <div className="red-text">{errors?.payment_proof}</div>
                      </div>
                      <button
                        type="submit"
                        className="waves-effect waves-light btn"
                      >
                        Upload
                      </button>
                      <Gap height={25} />
                      <div>
                        <Link to="/dashboard">Kembali Ke Dashboard</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="row">
            <div className="center">
              <Gap height={50} />
              <button
                className="waves-effect waves-light btn"
                onClick={() => dispatch(getParticipantsByUserId(user?.id))}
              >
                <i className="material-icons left">refresh</i> Refresh
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentStatus;
