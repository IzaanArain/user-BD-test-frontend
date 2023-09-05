import Register from "./Pages/Register";
import LoginPage from "./Pages/LoginPage";
import EditUser from "./Pages/EditUser";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useAuthContext } from "./Hooks/useAuthContext";

function App() {
  const userAuth=useAuthContext()
  const user=userAuth
  // console.log(user)
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {!user.userAuth ? <Route path="/" element={<Home />} />: <Navigate to="/login"/>}
          <Route path="/register" element={<Register />} />
          {!user.userAuth ? <Route path="/" element={<Home />} />: <Route path="/login" element={<LoginPage />} />}
          {!user.userAuth ? <Route path="/edit" element={<EditUser />} />: <Navigate to="/login"/>}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
