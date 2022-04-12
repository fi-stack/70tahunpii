import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

const GlobalApp = () => {
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

export default GlobalApp;
