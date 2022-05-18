import { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import {
  destroyMemberTeam,
  destroyTeam,
  getTeam,
  leaveTeam,
} from "../../redux/action";

const Team = () => {
  const { teamId } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTeam(teamId));
  }, [teamId]);

  const { user } = useSelector((state) => state.user);
  const { team } = useSelector((state) => state.team);

  const handleDeleteTeam = (teamId, userId) => {
    dispatch(destroyTeam(teamId, userId))
      .then((res) => {
        toast.success(res.message);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleDeleteMemberTeam = (teamId, userId, memberId) => {
    dispatch(destroyMemberTeam(teamId, userId, memberId))
      .then((res) => {
        toast.success(res.message);
        dispatch(getTeam(teamId));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleLeaveTeam = (teamId, userId) => {
    dispatch(leaveTeam(teamId, userId))
      .then((res) => {
        toast.success(res.message);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Team</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <div className="card">
            <div className="card-content">
              {team?.user_id === user?.id ? (
                <>
                  <span className="card-title">
                    <div class="row valign-wrapper">
                      <div class="col s2">
                        <img src={team?.image} class="circle responsive-img" />
                      </div>
                      <div className="col s10">
                        <span class="black-text">{team?.name}</span>
                      </div>
                    </div>
                  </span>
                  <div>Status : Lead</div>
                  <div>
                    *Jika ingin menghapus / membubarkan tim klik{" "}
                    <a onClick={() => handleDeleteTeam(teamId, user?.id)}>
                      Hapus Tim
                    </a>
                  </div>
                  <Gap height={10} />
                  <Link
                    to={`/team/${teamId}/${team?.type}/add`}
                    className="waves-effect waves-light btn"
                  >
                    Tambah Anggota
                  </Link>
                </>
              ) : (
                <>
                  <span className="card-title">
                    <div class="row valign-wrapper">
                      <div class="col s2">
                        <img src={team?.image} class="circle responsive-img" />
                      </div>
                      <div className="col s10">
                        {team === null ? (
                          <span className="red-text">
                            Belum Terdaftar Sebagai Anggota Tim
                          </span>
                        ) : (
                          team?.name
                        )}
                      </div>
                    </div>
                  </span>
                  <div>Status : Anggota</div>
                  <div>
                    *Jika ingin meninggalkan tim klik{" "}
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleLeaveTeam(teamId, user?.id)}
                    >
                      Tinggalkan Tim
                    </a>
                  </div>
                </>
              )}
              <table style={{ display: "block", overflow: "auto" }}>
                <thead>
                  <tr>
                    <td>Athlete</td>
                    <td>Ebib</td>
                    <td>Nama</td>
                    <td>Telp / Wa</td>
                  </tr>
                </thead>
                <tbody>
                  {team?.participant_details?.map((value, index) => (
                    <tr key={index}>
                      <td>
                        {value?.athlete_id ? (
                          <a
                            href={`https://www.strava.com/athletes/${value?.athlete_id}`}
                          >
                            {value?.athlete_id}
                          </a>
                        ) : (
                          <a href="#">
                            <i
                              className="material-icons red-text"
                              onClick={() => {
                                toast.error(
                                  `${value?.user?.name} belum melakukan koneksi Strava`
                                );
                              }}
                            >
                              error
                            </i>
                          </a>
                        )}
                      </td>
                      <td>{value.ebib}</td>
                      <td>{value?.user?.name}</td>
                      <td>
                        <a
                          href={`https://wa.me/62${value.user?.phone.substring(
                            1
                          )}`}
                          target="_blank"
                        >
                          {value.user?.phone}
                        </a>
                      </td>
                      <td>
                        {team?.user_id === user?.id &&
                        value?.user_id !== user?.id ? (
                          <button
                            className="waves-effect waves-light btn"
                            onClick={() =>
                              handleDeleteMemberTeam(teamId, user?.id, value.id)
                            }
                          >
                            Hapus
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Gap height={25} />
              <div>
                <Link to="/dashboard">Kembali Ke Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
