import Register from "./Pages/Register";
import LoginPage from "./Pages/LoginPage";
import EditUser from "./Pages/EditUser";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useAuthContext } from "./Hooks/useAuthContext";

function App() {
  const userAuth=useAuthContext()
  const user=userAuth.userAuth
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
