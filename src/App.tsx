import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import HeroesList from "./pages/HeroesList";
import LifeCycle from "./learning/LifeCycle";
import Counter from "./learning/Counter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./layout/MainLayout";
import HeroDetails from "./pages/HeroDetails";
import Register from "./pages/Register";
import { AuthContextProvider } from "@/providers/AuthContextProvider";
import Profile from "./pages/Profile";

const client = new QueryClient();
function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/heroes" element={<HeroesList />} />
              <Route path="/heroes/:id" element={<HeroDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/learning">
                <Route path="lifecycle" element={<LifeCycle />} />
                <Route path="counter" element={<Counter />} />
              </Route>
            </Route>
            {/* <Route element={<MembersLayout />}>
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<MemberDetails />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
