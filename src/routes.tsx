import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import HeroDetails from "./pages/HeroDetails";
import Register from "./pages/Register";
import PrivateRoute from "./hoc/PrivateRoute";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import SearchHero from "./pages/SearchHero";
import Battle from "./pages/Battle";
import { lazy } from "react";
import TabContainer from "./learning/useTransition/TabContainer";
import ZustandExample from "./learning/ZustandExample";

const Counter = lazy(() => import("./learning/Counter"));
const LifeCycle = lazy(() => import("./learning/LifeCycle"));
const Optimizations = lazy(() => import("./learning/Optimizations"));
const Profile = lazy(() => import("./pages/Profile"));
const HeroesList = lazy(() => import("./pages/HeroesList"));

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
        <Route path="/learning/optimizations" element={<Optimizations />} />
        <Route path="/learning/transition" element={<TabContainer />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/learning">
            <Route path="zustand" element={<ZustandExample />} />
            <Route path="lifecycle" element={<LifeCycle />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
