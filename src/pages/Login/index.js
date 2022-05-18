import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storeLogin } from "../../redux/action";

const Login = () => {
  const userToken = localStorage.getItem("user-token");

  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate("/dashboard");
      window.location.reload();
    }
  }, [userToken]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState([]);

  const store = (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    storeLogin(form)
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
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="row">
        <div className="col m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <span class="card-title center">Sign In</span>
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

                  <div className="input-field col s12 center">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn"
                    >
                      Masuk
                    </button>
                  </div>
                  <div className="input-field col s12 center">
                    <Link to="/register">Belum Punya Akun?</Link>
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

export default Login;
