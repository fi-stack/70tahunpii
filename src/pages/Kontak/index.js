import Helmet from "react-helmet";
import { Gap } from "../../components";

const Kontak = () => {
  return (
    <>
      <Helmet>
        <title>Kontak</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m6 offset-m3 l4 offset-l4">
          <div className="card">
            <Gap height={20} />
            <div className="card-content">
              <div className="center" style={styles.title}>
                Kontak
              </div>
              <Gap height={10} />
              <div style={styles.content}>
                <table>
                  <tr>
                    <td>
                      <a href="https://wa.me/6281317242774">
                        <i className="material-icons left">message</i>Livechat
                        PII 1
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://wa.me/6281282750007">
                        <i className="material-icons left">message</i>Livechat
                        PII 2
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://wa.me/6281220783397">
                        <i className="material-icons left">message</i>Livechat
                        PortalSepeda 1 (Teknis/Strava)
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://wa.me/6289690596772">
                        <i className="material-icons left">message</i>Livechat
                        PortalSepeda 2 (Teknis/Strava)
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
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
};

export default Kontak;
