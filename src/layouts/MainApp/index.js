import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { getUser } from "../../redux/action";

const MainApp = () => {
  const userToken = localStorage.getItem("user-token");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate("/login");
      window.location.reload();
    } else {
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);
    }
  }, [dispatch]);

  return (
    <body style={styles.body}>
      <Navbar />
      <main style={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

const styles = {
  body: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  main: {
    flex: "1 0 auto",
  },
};

export default MainApp;
