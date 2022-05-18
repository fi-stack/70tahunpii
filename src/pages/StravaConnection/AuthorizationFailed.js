import { Link } from "react-router-dom";

const AuthorizationFailed = () => {
  return (
    <>
      <h1>Authorization Failed</h1>
      <Link to="/dashboard">Kembali Ke Dashboard</Link>
    </>
  );
};

export default AuthorizationFailed;
