import React from "react";
import Helmet from "react-helmet";
import { Gap } from "../../components";

const Twibon = () => {
  return (
    <>
      <Helmet>
        <title>Twibon</title>
      </Helmet>
      <div className="row">
        <div className="card">
          <Gap height={20} />
          <div className="card-content">
            <div className="center" style={styles.title}>
              Twibon
            </div>
            <Gap height={10} />
            <div className="center" style={styles.subTitle}>
              Untuk membuat twibon, klik twibon dibawah ini
            </div>
            <Gap height={10} />
            <hr />
            <Gap height={25} />
            <div style={styles.content}>
              <a href="https://twb.nz/larigowesonlinepii2022">
                <img
                  src="/images/gallery/twibbonPeserta.png"
                  className="responsive-img"
                  style={styles.btnTwibon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#616161",
  },
  content: {
    fontSize: 16,
    color: "#616161",
  },
  btnTwibon: {
    maxWidth: "25%",
  },
};

export default Twibon;
