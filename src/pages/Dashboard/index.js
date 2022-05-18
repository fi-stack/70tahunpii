import { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import {
  connectStrava,
  getAthleteByUserId,
  getParticipantDetailsByUserId,
  getParticipantsByUserId,
} from "../../redux/action";
import { disconnectStrava } from "../../redux/action/user";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParticipantsByUserId(user?.id));
    dispatch(getAthleteByUserId(user?.id));
    dispatch(getParticipantDetailsByUserId(user?.id));
  }, [user]);
  const { athlete_by_user_id } = useSelector((state) => state.athleteByUserId);
  const { participant_details_by_user_id } = useSelector(
    (state) => state.participantDetailsByUserId
  );

  const handleConnectStrava = () => {
    dispatch(connectStrava(user?.id));
  };

  const handleDisconnectStrava = (id) => {
    dispatch(disconnectStrava(id))
      .then((res) => toast.success(res.message))
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <div className="card">
            <div className="card-content">
              <span
                class="card-title"
                style={{ display: "block", overflow: "auto" }}
              >
                Hello, {user?.email}
              </span>
              <Gap height={25} />
              {!user?.kta_category ||
              !user?.name ||
              !user?.birthday ||
              !user?.gender ||
              !user?.phone ||
              !user?.nik ||
              !user?.address ||
              !user?.province_code ||
              !user?.city_code ||
              !user?.district_code ||
              !user?.village_code ||
              !user?.post_code ||
              !user?.jersey_size ? (
                <Link
                  to="/profile-update"
                  className="waves-effect waves-light btn"
                >
                  Lengkapi Biodata
                </Link>
              ) : (
                <>
                  <div>
                    <Link
                      to="/profile"
                      className="waves-effect waves-light btn"
                    >
                      Lihat Profile
                    </Link>
                  </div>
                  <Gap height={15} />
                  <div>
                    <Link
                      to="/choose-event"
                      className="waves-effect waves-light btn"
                    >
                      Pilih Event
                    </Link>
                  </div>
                  <Gap height={15} />
                  <div>
                    <Link
                      to="/payment-status"
                      className="waves-effect waves-light btn"
                    >
                      Status Pembayaran
                    </Link>
                  </div>
                  <Gap height={15} />
                  {(() => {
                    if (
                      athlete_by_user_id &&
                      participant_details_by_user_id?.length > 0
                    ) {
                      return (
                        <>
                          <div>
                            *Klik tombol dibawah ini utk melihat data aktivitas
                            Strava
                          </div>
                          <Link
                            to="/my-activities"
                            className="waves-effect waves-light btn"
                          >
                            Terhubung ({athlete_by_user_id?.athlete_name}{" "}
                            {athlete_by_user_id?.athlete_id})
                          </Link>
                          <Gap height={15} />
                          <button
                            className="waves-effect waves-light btn red darken-1"
                            onClick={() =>
                              toast.error(
                                "Jika ingin melakukan disconnect akun Strava Silahkan hubungi kontak Live Chat"
                              )
                            }
                          >
                            Disconnect Strava
                          </button>
                          {/* <button
                            className="waves-effect waves-light btn red darken-1"
                            onClick={() =>
                              handleDisconnectStrava(
                                athlete_by_user_id?.athlete_id
                              )
                            }
                          >
                            Disconnect Strava
                          </button> */}
                        </>
                      );
                    } else if (
                      !athlete_by_user_id &&
                      participant_details_by_user_id?.length > 0
                    ) {
                      return (
                        <button
                          className="waves-effect waves-light btn"
                          onClick={() => handleConnectStrava()}
                        >
                          Hubungkan Strava
                        </button>
                      );
                    }
                  })()}
                  <Gap height={15} />
                  {participant_details_by_user_id?.map((value, index) => {
                    if (participant_details_by_user_id?.length > 0) {
                      return (
                        <Link
                          to={`/team/${value.team_id}`}
                          className="waves-effect waves-light btn"
                          style={{ marginRight: "10px" }}
                        >
                          Lihat Tim {value.type === "run" ? "Lari" : "Gowes"}
                        </Link>
                      );
                    }
                  })}
                  <Gap height={15} />
                  {(() => {
                    if (participant_details_by_user_id?.length > 0) {
                      return (
                        <>
                          <div className="card card-content">
                            <div className="red-text">
                              *Jika anda seorang (Kapten) dari tim anda,
                              silahkan klik <b>REGISTRASI TIM</b> untuk membuat
                              tim. Setelah tim berhasil dibuat tambahkan anggota
                              tim anda dengan klik{" "}
                              <b>LIHAT TIM GOWES / LIHAT TIM LARI</b>
                            </div>
                            <Gap height={10} />
                            <Link
                              to="/team-register"
                              className="waves-effect waves-light btn"
                            >
                              Registrasi Tim
                            </Link>
                          </div>
                        </>
                      );
                    }
                  })()}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
