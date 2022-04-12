import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storeRegister } from "../../redux/action";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const store = (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    storeRegister(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/login");
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
              <div className="row ">
                <div className="input-field col s12">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                  <div className="red-text">{errors?.email}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                  <div className="red-text">{errors?.password}</div>
                </div>
                <div className="input-field col s12">
                  <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  <label>Konfirmasi Password</label>
                  <div className="red-text">
                    {errors?.password_confirmation}
                  </div>
                </div>
                <div className="input-field col s12">
                  <button
                    type="submit"
                    className="waves-effect waves-light btn"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="input-field col s12">
                  <Link to="/login">Sudah Punya Akun?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
