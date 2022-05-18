import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import { getParticipantDetails } from "../../redux/action";
import { updateTeamIdParticipantDetail } from "../../redux/action/participant";

const Add = () => {
  const { teamId, type } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getParticipantDetails(type));
  }, [type]);

  const { participant_details } = useSelector(
    (state) => state.participantDetails
  );

  const handleAddParticipantToTeam = (id) => {
    updateTeamIdParticipantDetail(id, teamId)
      .then((res) => {
        toast.success(res.message);
        navigate(`/team/${teamId}`);
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
              <Link to="/dashboard">Kembali Ke Dashboard</Link>
              <div className="row">
                <div class="input-field col s6 l4">
                  <input
                    type="text"
                    onChange={(e) => {
                      dispatch(getParticipantDetails(type, e.target.value));
                    }}
                  />
                  <label>Cari Ebib</label>
                </div>
              </div>
              <table style={{ display: "block", overflow: "auto" }}>
                <thead>
                  <tr>
                    <td>Ebib</td>
                    <td>Athlete</td>
                    <td>Nama</td>
                    <td>Aksi</td>
                  </tr>
                </thead>
                <tbody>
                  {participant_details?.map((value, index) => {
                    if (value.team_id === null)
                      return (
                        <tr key={index}>
                          <td>{value.ebib}</td>
                          <td>
                            <div className="valign-wrapper center-align">
                              <img
                                src={value.athlete?.profile_picture}
                                className="circle"
                                style={{ width: "30px", marginRight: "5px" }}
                              />
                              <a
                                href={`https://www.strava.com/athletes/${value.athlete_id}`}
                              >
                                {value.athlete_id}
                              </a>
                            </div>
                          </td>
                          <td>{value?.user?.name}</td>
                          <td>
                            <button
                              className="waves-effect waves-light btn"
                              onClick={() =>
                                handleAddParticipantToTeam(value.id)
                              }
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
