import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import { getUser, storeParticipant } from "../../redux/action";
import { Helmet } from "react-helmet";

const ChooseEvent = () => {
  const { user } = useSelector((state) => state.user);

  const [type, setType] = useState();
  const [amount, setAmount] = useState();
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const storeParticipantEvent = (e) => {
    e.preventDefault();

    const form = {
      user_id: user?.id,
      amount: parseInt(amount),
      type,
    };

    storeParticipant(form)
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
        <title>Choose Event</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <span class="card-title">Pilih Event</span>
              {user?.id_member_pii ? (
                <>
                  <form onSubmit={storeParticipantEvent}>
                    <div>
                      Status : (
                      {user?.id_member_pii
                        ? `Anggota PII ${user?.id_member_pii}`
                        : "Calon Anggota PII"}
                      )
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <label>
                          <input
                            type="radio"
                            value="run"
                            name="type"
                            onChange={(e) => {
                              setType(e.target.value);
                              setAmount(150000);
                            }}
                          />
                          <span>Run</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <label>
                          <input
                            type="radio"
                            value="ride"
                            name="type"
                            onChange={(e) => {
                              setType(e.target.value);
                              setAmount(150000);
                            }}
                          />
                          <span>Ride</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <label>
                          <input
                            type="radio"
                            value="run-ride"
                            name="type"
                            onChange={(e) => {
                              setType(e.target.value);
                              setAmount(300000);
                            }}
                          />
                          <span>Run & Ride</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <Gap height={10} />
                        <div className="red-text">{errors?.type}</div>
                        <Gap height={15} />
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                        >
                          Submit
                        </button>
                        <Gap height={25} />
                        <div>
                          <Link to="/dashboard">Kembali Ke Dashboard</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form onSubmit={storeParticipantEvent}>
                    <div>
                      Status : (
                      {user?.id_member_pii
                        ? `Anggota PII ${user?.id_member_pii}`
                        : "Calon Anggota PII"}
                      )
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <label>
                          <input
                            type="radio"
                            value="run"
                            name="type"
                            onChange={(e) => {
                              setType(e.target.value);
                              setAmount(250000);
                            }}
                          />
                          <span>Run</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <label>
                          <input
                            type="radio"
                            value="ride"
                            name="type"
                            onChange={(e) => {
                              setType(e.target.value);
                              setAmount(250000);
                            }}
                          />
                          <span>Ride</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <label>
                          <input
                            type="radio"
                            value="run-ride"
                            name="type"
                            onChange={(e) => {
                              setType(e.target.value);
                              setAmount(500000);
                            }}
                          />
                          <span>Run & Ride</span>
                        </label>
                      </div>
                      <div className="input-field col s12">
                        <Gap height={10} />
                        <div className="red-text">{errors?.type}</div>
                        <Gap height={15} />
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                        >
                          Submit
                        </button>
                        <Gap height={25} />
                        <div>
                          <Link to="/dashboard">Kembali Ke Dashboard</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseEvent;
