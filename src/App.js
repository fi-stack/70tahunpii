import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalApp, MainApp } from "./layouts";
import {
  Dashboard,
  Gallery,
  Home,
  InfoEvent,
  Kontak,
  Login,
  Pemenang,
  ProfileUpdate,
  Register,
  Sponsor,
  StravaLeaderboard,
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
            <Route path="/info-event" element={<GlobalApp />}>
              <Route index element={<InfoEvent />} />
            </Route>
            <Route path="/strava-leaderboard" element={<GlobalApp />}>
              <Route index element={<StravaLeaderboard />} />
            </Route>
            <Route path="/pemenang" element={<GlobalApp />}>
              <Route index element={<Pemenang />} />
            </Route>
            <Route path="/gallery" element={<GlobalApp />}>
              <Route index element={<Gallery />} />
            </Route>
            <Route path="/sponsor" element={<GlobalApp />}>
              <Route index element={<Sponsor />} />
            </Route>
            <Route path="/kontak" element={<GlobalApp />}>
              <Route index element={<Kontak />} />
            </Route>
            <Route path="/register" element={<GlobalApp />}>
              <Route index element={<Register />} />
            </Route>
            <Route path="/login" element={<GlobalApp />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/dashboard" element={<MainApp />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/profile-update" element={<MainApp />}>
              <Route index element={<ProfileUpdate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
