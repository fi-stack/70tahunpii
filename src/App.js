import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalApp, MainApp } from "./layouts";
import {
  AddParticipantToTeam,
  AlreadyConnectWithAnotherParticipant,
  AuthorizationFailed,
  ChooseEvent,
  Dashboard,
  Faq,
  Gallery,
  PanduanKoneksiStrava,
  PanduanRegistrasiTim,
  Hadiah,
  Home,
  Kontak,
  Leaderboard,
  LeaderboardDetail,
  LeaderboardTeam,
  ListPeserta,
  ListTim,
  Login,
  MyActivities,
  Panduan,
  PaymentStatus,
  Pemenang,
  PeraturanTataTertib,
  Profile,
  ProfileUpdate,
  Register,
  Sponsor,
  SuccessConnection,
  Team,
  TeamRegister,
  Twibon,
} from "./pages";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GlobalApp />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/hadiah" element={<GlobalApp />}>
              <Route index element={<Hadiah />} />
            </Route>
            <Route path="/list-peserta/:type" element={<GlobalApp />}>
              <Route index element={<ListPeserta />} />
            </Route>
            <Route path="/list-tim/:type" element={<GlobalApp />}>
              <Route index element={<ListTim />} />
            </Route>
            <Route path="/pemenang" element={<GlobalApp />}>
              <Route index element={<Pemenang />} />
            </Route>
            <Route path="/peraturan-tata-tertib" element={<GlobalApp />}>
              <Route index element={<PeraturanTataTertib />} />
            </Route>
            <Route path="/panduan" element={<GlobalApp />}>
              <Route index element={<Panduan />} />
            </Route>
            <Route path="/gallery" element={<GlobalApp />}>
              <Route index element={<Gallery />} />
            </Route>
            <Route path="/gallery/twibon" element={<GlobalApp />}>
              <Route index element={<Twibon />} />
            </Route>
            <Route
              path="/gallery/panduan-koneksi-strava"
              element={<GlobalApp />}
            >
              <Route index element={<PanduanKoneksiStrava />} />
            </Route>
            <Route
              path="/gallery/panduan-registrasi-tim"
              element={<GlobalApp />}
            >
              <Route index element={<PanduanRegistrasiTim />} />
            </Route>
            <Route path="/sponsor" element={<GlobalApp />}>
              <Route index element={<Sponsor />} />
            </Route>
            <Route path="/kontak" element={<GlobalApp />}>
              <Route index element={<Kontak />} />
            </Route>
            <Route path="/faq" element={<GlobalApp />}>
              <Route index element={<Faq />} />
            </Route>
            <Route path="/register" element={<GlobalApp />}>
              <Route index element={<Register />} />
            </Route>
            <Route path="/login" element={<GlobalApp />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/leaderboard/:type" element={<GlobalApp />}>
              <Route index element={<Leaderboard />} />
            </Route>
            <Route path="/leaderboard/:type/:athleteId" element={<GlobalApp />}>
              <Route index element={<LeaderboardDetail />} />
            </Route>
            <Route path="/leaderboard/team/:type" element={<GlobalApp />}>
              <Route index element={<LeaderboardTeam />} />
            </Route>
            <Route path="/dashboard" element={<MainApp />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/profile" element={<MainApp />}>
              <Route index element={<Profile />} />
            </Route>
            <Route path="/profile-update" element={<MainApp />}>
              <Route index element={<ProfileUpdate />} />
            </Route>
            <Route path="/choose-event" element={<MainApp />}>
              <Route index element={<ChooseEvent />} />
            </Route>
            <Route path="/payment-status" element={<MainApp />}>
              <Route index element={<PaymentStatus />} />
            </Route>
            <Route path="/success-connection" element={<MainApp />}>
              <Route index element={<SuccessConnection />} />
            </Route>
            <Route path="/authorization-failed" element={<MainApp />}>
              <Route index element={<AuthorizationFailed />} />
            </Route>
            <Route
              path="/already-connect-with-another-participant"
              element={<MainApp />}
            >
              <Route index element={<AlreadyConnectWithAnotherParticipant />} />
            </Route>
            <Route path="/team-register" element={<MainApp />}>
              <Route index element={<TeamRegister />} />
            </Route>
            <Route path="/team/:teamId" element={<MainApp />}>
              <Route index element={<Team />} />
            </Route>
            <Route path="/team/:teamId/:type/add" element={<MainApp />}>
              <Route index element={<AddParticipantToTeam />} />
            </Route>
            <Route path="/my-activities" element={<MainApp />}>
              <Route index element={<MyActivities />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
