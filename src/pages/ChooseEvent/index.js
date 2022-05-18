import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import {
  getParticipantsByUserId,
  getUser,
  storeParticipant,
} from "../../redux/action";

const ChooseEvent = () => {
  const { user } = useSelector((state) => state.user);

  const [type, setType] = useState();
  const [amount, setAmount] = useState();
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getParticipantsByUserId(user?.id));
  }, [user]);

  const { participants_by_user_id } = useSelector(
    (state) => state.participantsByUserId
  );

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
              {user?.kta_category === "a" ? (
                <>
                  <form onSubmit={storeParticipantEvent}>
                    <div className="row">
                      {participants_by_user_id.map((value, index) =>
                        value.type === "run-ride" ? null : null
                      )}
                      {participants_by_user_id.map((value, index) =>
                        value.type === "run" ? (
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
                              <span>Gowes</span>
                            </label>
                          </div>
                        ) : null
                      )}
                      {participants_by_user_id.map((value, index) =>
                        value.type === "ride" ? (
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
                              <span>Lari</span>
                            </label>
                          </div>
                        ) : null
                      )}
                      {!participants_by_user_id.length ? (
                        <>
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
                              <span>Lari</span>
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
                              <span>Gowes</span>
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
                              <span>Lari & Gowes</span>
                            </label>
                          </div>
                        </>
                      ) : null}
                      <div className="input-field col s12">
                        <Gap height={10} />
                        <div className="red-text">{errors?.type}</div>
                        <Gap height={15} />
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                        >
                          Kirim
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
                    <div className="row">
                      {participants_by_user_id.map((value, index) =>
                        value.type === "run-ride" ? null : null
                      )}
                      {participants_by_user_id.map((value, index) =>
                        value.type === "run" ? (
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
                              <span>Gowes</span>
                            </label>
                          </div>
                        ) : null
                      )}
                      {participants_by_user_id.map((value, index) =>
                        value.type === "ride" ? (
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
                              <span>Lari</span>
                            </label>
                          </div>
                        ) : null
                      )}
                      {!participants_by_user_id.length ? (
                        <>
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
                              <span>Lari</span>
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
                              <span>Gowes</span>
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
                              <span>Lari & Gowes</span>
                            </label>
                          </div>
                        </>
                      ) : null}
                      <div className="input-field col s12">
                        <Gap height={10} />
                        <div className="red-text">{errors?.type}</div>
                        <Gap height={15} />
                        <button
                          type="submit"
                          className="waves-effect waves-light btn"
                        >
                          Kirim
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
