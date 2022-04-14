import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Gap } from "../../components";
import { getUserDetail } from "../../redux/action";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail(user.id));
  }, [dispatch]);

  const { user_detail } = useSelector((state) => state.userDetail);

  return (
    <>
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                Hello,{" "}
                {user_detail?.email ? (
                  user_detail?.email
                ) : (
                  <button
                    className="waves-effect waves-light btn"
                    onClick={() => dispatch(getUserDetail(user?.id))}
                  >
                    <i className="material-icons left">refresh</i> Refresh
                  </button>
                )}
              </span>
              <table>
                <tbody>
                  <tr>
                    <td>KTA Anggota PII</td>
                    <td>:</td>
                    <td>
                      {user_detail?.id_member_pii
                        ? user_detail.id_member_pii
                        : "Bukan Anggota"}
                    </td>
                  </tr>
                  <tr>
                    <td>NIK</td>
                    <td>:</td>
                    <td>{user_detail?.nik}</td>
                  </tr>
                  <tr>
                    <td>Nama Lengkap</td>
                    <td>:</td>
                    <td>{user_detail?.name}</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>
                      {user_detail?.gender === "male"
                        ? "Laki-Laki"
                        : "Perempuan"}
                    </td>
                  </tr>
                  <tr>
                    <td>Tempat, Tanggal Lahir</td>
                    <td>:</td>
                    <td>
                      {`${user_detail?.birthplace}, ${user_detail?.birthday}`}
                    </td>
                  </tr>
                  <tr>
                    <td>Telp / Whatsapp</td>
                    <td>:</td>
                    <td>{user_detail?.phone}</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{user_detail?.address}</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td>:</td>
                    <td>{user_detail?.province?.name}</td>
                  </tr>
                  <tr>
                    <td>Kota / Kabupaten</td>
                    <td>:</td>
                    <td>{user_detail?.city?.name}</td>
                  </tr>
                  <tr>
                    <td>Kecamatan</td>
                    <td>:</td>
                    <td>{user_detail?.district?.name}</td>
                  </tr>
                  <tr>
                    <td>Desa</td>
                    <td>:</td>
                    <td>{user_detail?.village?.name}</td>
                  </tr>
                  <tr>
                    <td>Kode Pos</td>
                    <td>:</td>
                    <td>{user_detail?.post_code}</td>
                  </tr>
                  <tr>
                    <td>Pekerjaan</td>
                    <td>:</td>
                    <td>{user_detail?.job}</td>
                  </tr>
                  <tr>
                    <td>Perguruan Tinggi</td>
                    <td>:</td>
                    <td>{user_detail?.college}</td>
                  </tr>
                  <tr>
                    <td>Jurusan</td>
                    <td>:</td>
                    <td>{user_detail?.major}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Ukuran Jersey</td>
                    <td>:</td>
                    <th>{user_detail?.jersey_size?.toUpperCase()}</th>
                  </tr>
                  <tr>
                    <td>Ebib</td>
                    <td>:</td>
                    <th>
                      {!user_detail?.participant_details?.length ? (
                        <span>-</span>
                      ) : null}
                      {user_detail?.participant_details?.map((value, index) => (
                        <span style={{ fontWeight: 700 }}>
                          {value.ebib.toUpperCase()}
                        </span>
                      ))}
                    </th>
                  </tr>
                </tfoot>
              </table>
              <Gap height={25} />
              <Link to="/dashboard">Kembali Ke Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  ebib: { fontWeight: 700 },
};

export default Profile;
