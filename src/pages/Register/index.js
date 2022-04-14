import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, storeRegister } from "../../redux/action";
import { Helmet } from "react-helmet";

const Register = () => {
  const userToken = localStorage.getItem("user-token");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) {
      navigate("/dashboard");
      window.location.reload();
    } else {
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);
    }
  }, [dispatch]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [errors, setErrors] = useState([]);

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
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="row">
        <div className="col m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <span class="card-title center">Sign Up</span>
              <form onSubmit={store}>
                <div className="row">
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
                  <div className="input-field col s12 center">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="input-field col s12 center">
                    <Link to="/login">Sudah Punya Akun?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
