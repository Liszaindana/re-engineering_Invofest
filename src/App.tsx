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
import SpeakerList from "./pages/Dashboard/Categories/Speakers/SpeakerList";
import CreateNewEvent from "./pages/Dashboard/Categories/Event/CreateNewEvent";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import CategoriesList from "./pages/Dashboard/Categories/CategoriesList";
import DashboardLayout from "./layout/DashboardLayout";


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
        </Route>

        {/* Dashboard Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardIndex />} />
            <Route path="category" element={<CategoriesList />} />
            <Route path="category/create" element={<CreateCategories />} />
            <Route path="category/event/:id" element={<EventList />} />
            <Route path="category/event/create" element={<CreateNewEvent />} />
            <Route path="category/speaker" element={<SpeakerList />} />
            <Route path="category/speaker/create" element={<CreateNewSpeaker />} />
          </Route>
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