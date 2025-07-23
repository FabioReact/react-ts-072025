import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import HeroesList from "./pages/HeroesList";
import LifeCycle from "./learning/LifeCycle";
import Counter from "./learning/Counter";
import MainLayout from "./layout/MainLayout";
import HeroDetails from "./pages/HeroDetails";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivateRoute from "./hoc/PrivateRoute";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import SearchHero from "./pages/SearchHero";
import Battle from "./pages/Battle";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="/heroes/:id" element={<HeroDetails />} />
        <Route path="/search" element={<SearchHero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/learning">
            <Route path="lifecycle" element={<LifeCycle />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
