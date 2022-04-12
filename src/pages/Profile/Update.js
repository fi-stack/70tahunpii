import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getCities,
  getDistricts,
  getProvinces,
  getVillages,
  updateProfile,
} from "../../redux/action";

const Update = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  useEffect(() => {
    dispatch(getProvinces());
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);

  const { provinces } = useSelector((state) => state.provinces);
  const { cities } = useSelector((state) => state.cities);
  const { districts } = useSelector((state) => state.districts);
  const { villages } = useSelector((state) => state.villages);

  const [idMemberPII = user?.id_member_pii, setIdMemberPII] = useState();
  const [name = user?.name, setName] = useState();
  const [email = user?.email, setEmail] = useState();
  const [phone = user?.phone, setPhone] = useState();
  const [nik = user?.nik, setNik] = useState();
  const [address = user?.address, setAddress] = useState();
  const [provinceCode = user?.province_code, setProvinceCode] = useState();
  const [cityCode = user?.city_code, setCityCode] = useState();
  const [districtCode = user?.district_code, setDistrictCode] = useState();
  const [villageCode = user?.village_code, setVillageCode] = useState();
  const [postCode = user?.post_code, setPostCode] = useState();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const store = (e) => {
    e.preventDefault();

    const form = {
      id_member_pii: idMemberPII,
      name,
      email,
      phone,
      nik,
      address,
      province_code: provinceCode,
      city_code: cityCode,
      district_code: districtCode,
      village_code: villageCode,
      post_code: postCode,
    };

    updateProfile(form, user?.id)
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
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <form onSubmit={store}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                  <div className="red-text">{errors?.name}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    value={idMemberPII}
                    onChange={(e) => setIdMemberPII(e.target.value)}
                  />
                  <label>Id Anggota PII (Optional)</label>
                  <div className="red-text">{errors?.name}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Nama Lengkap</label>
                  <div className="red-text">{errors?.name}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label>Phone</label>
                  <div className="red-text">{errors?.phone}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                  />
                  <label>NIK</label>
                  <div className="red-text">{errors?.nik}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label>Alamat</label>
                  <div className="red-text">{errors?.address}</div>
                </div>
                <div class="input-field col s12">
                  <select
                    value={provinceCode}
                    onChange={(e) => {
                      setProvinceCode(e.target.value);
                      dispatch(getCities(e.target.value));
                    }}
                  >
                    <option value="" disabled selected>
                      Pilih Provinsi
                    </option>
                    {provinces?.map((value, index) => (
                      <option value={value.code}>{value.name}</option>
                    ))}
                  </select>
                  <label>Provinsi</label>
                  <div className="red-text">{errors?.province_code}</div>
                </div>
                <div class="input-field col s12">
                  <select
                    value={cityCode}
                    onChange={(e) => {
                      setCityCode(e.target.value);
                      dispatch(getDistricts(e.target.value));
                    }}
                  >
                    <option value="" disabled selected>
                      Pilih Kota
                    </option>
                    {cities?.map((value, index) => (
                      <option value={value.code}>{value.name}</option>
                    ))}
                  </select>
                  <label>Kota</label>
                  <div className="red-text">{errors?.city_code}</div>
                </div>
                <div class="input-field col s12">
                  <select
                    value={districtCode}
                    onChange={(e) => {
                      setDistrictCode(e.target.value);
                      dispatch(getVillages(e.target.value));
                    }}
                  >
                    <option value="" disabled selected>
                      Pilih Daerah
                    </option>
                    {districts?.map((value, index) => (
                      <option value={value.code}>{value.name}</option>
                    ))}
                  </select>
                  <label>Daerah</label>
                  <div className="red-text">{errors?.district_code}</div>
                </div>
                <div class="input-field col s12">
                  <select
                    value={villageCode}
                    onChange={(e) => {
                      setVillageCode(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      Pilih Desa
                    </option>
                    {villages?.map((value, index) => (
                      <option value={value.code}>{value.name}</option>
                    ))}
                  </select>
                  <label>Desa</label>
                  <div className="red-text">{errors?.village_code}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                  />
                  <label>Kode Pos</label>
                  <div className="red-text">{errors?.post_code}</div>
                </div>
                <div className="input-field col s12">
                  <button
                    type="submit"
                    className="waves-effect waves-light btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
