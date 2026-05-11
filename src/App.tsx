import { BrowserRouter, Route, Routes } from "react-router";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/register";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import CreateCategories from "./pages/Dashboard/Categories/CreateCategories";
import EventList from "./pages/Dashboard/Categories/Event/EventList";
import CreateNewSpeaker from "./pages/Dashboard/Categories/Speakers/CreateNewSpeaker";
import CreateNewEvent from "./pages/Dashboard/Categories/Event/CreateNewEvent";

function App() {
  return (
 <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/category" element={<CreateCategories />} />
          <Route path="/event" element={<EventList />} />
          <Route path="/create-event" element={<CreateNewEvent />} />
          <Route path="/NewSpeaker" element={<CreateNewSpeaker />} />
        </Route>


        {/* Auth Page */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
};

export default App;