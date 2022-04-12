import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  storeParticipant,
  convertToBase64,
  uploadPaymentProof,
} from "../../redux/action";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  const [type, setType] = useState([]);
  const [image, setImage] = useState();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const storeParticipantEvent = (e) => {
    e.preventDefault();

    const form = {
      user_id: user?.id,
      type,
    };

    storeParticipant(form)
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
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const storeUploadPaymentProof = (e) => {
    e.preventDefault();

    const form = {
      user_id: user?.id,
      type: user?.participants[0].type,
      payment_proof: image,
    };

    uploadPaymentProof(form)
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
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div>
            Id Anggota PII :{" "}
            {user.id_member_pii ? user.id_member_pii : "Bukan Anggota"}
          </div>
          <div>Email : {user?.email}</div>
          <div>Nama Lengkap : {user?.name}</div>
          <div>No.Telp / WhatsApp : {user?.phone}</div>
          <div>NIK : {user?.nik}</div>
          <div>Alamat : {user?.nik}</div>
          <div>Provinsi : {user.province?.name}</div>
          <div>Kota : {user.city?.name}</div>
          <div>Daerah : {user.district?.name}</div>
          <div>Desa : {user.village?.name}</div>
          <div>Kode Pos : {user?.post_code}</div>
          <Link to="/profile-update" className="waves-effect waves-light btn">
            Lengkapi Biodata
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div>Pilih Event</div>
          <form onSubmit={storeParticipantEvent}>
            <p>
              <label>
                <input
                  type="checkbox"
                  value="run"
                  onChange={(e) => setType(e.target.value)}
                />
                <span>Run</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  value="ride"
                  onChange={(e) => setType(e.target.value)}
                />
                <span>Ride</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  value="run-ride"
                  onChange={(e) => setType(e.target.value)}
                />
                <span>Run & Ride</span>
              </label>
            </p>
            <div className="red-text">{errors?.type}</div>
            <button type="submit" className="waves-effect waves-light btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div>Data Event</div>
          {user.participants?.length ? (
            <>
              <div>Type : {user.participants[0].type}</div>
              <div>Amount : {user.participants[0].amount}</div>
              <div>
                Status :{" "}
                {user.participants[0].verified ? "Sudah Verif" : "Belum Verif"}
              </div>
              <div>
                Bukti Pembayaran :{" "}
                {user.participants[0].payment_proof
                  ? user.participants[0].payment_proof
                  : "Belum Upload"}
              </div>
            </>
          ) : null}
          <form onSubmit={storeUploadPaymentProof}>
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input
                  type="file"
                  label="Image"
                  accept=".jpeg, .png, .jpg"
                  className="custom-file-input"
                  onChange={(e) => handleFileUpload(e)}
                />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" />
              </div>
            </div>
            <button type="submit" className="waves-effect waves-light btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
