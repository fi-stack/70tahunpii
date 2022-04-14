import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Gap } from "../../components";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="row">
        <div className="col m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <span class="card-title">Hello, {user?.email}</span>
              <Gap height={25} />
              {!user?.name ||
              !user?.phone ||
              !user?.nik ||
              !user?.address ||
              !user?.province_code ||
              !user?.city_code ||
              !user?.district_code ||
              !user?.village_code ||
              !user?.post_code ? (
                <Link
                  to="/profile-update"
                  className="waves-effect waves-light btn"
                >
                  Lengkapi Biodata
                </Link>
              ) : (
                <>
                  <div>
                    <Link
                      to="/profile"
                      className="waves-effect waves-light btn"
                    >
                      Lihat Profile
                    </Link>
                  </div>
                  <Gap height={15} />
                  <div>
                    <Link
                      to="/choose-event"
                      className="waves-effect waves-light btn"
                    >
                      Pilih Event
                    </Link>
                  </div>
                  <Gap height={15} />
                  <div>
                    <Link
                      to="/payment-status"
                      className="waves-effect waves-light btn"
                    >
                      Payment Status
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
