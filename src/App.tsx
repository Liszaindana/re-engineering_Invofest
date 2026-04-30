import Login from "./pages/Login";
import Register from "./pages/register";
import RegistrasiEvent from "./pages/RegistrasiEvent";

function App() {
  return (
  <div className="container mx-auto grid grid-cols-2 gap-6">
    <Login />
    <Register />
    <RegistrasiEvent />
  </div>

  );
};

export default App;