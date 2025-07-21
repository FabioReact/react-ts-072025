import { BrowserRouter, Route, Routes } from "react-router";
import './App.css'
import Home from "./pages/Home";
import HeroesList from "./pages/HeroesList";
import LifeCycle from "./learning/LifeCycle";
import Counter from "./learning/Counter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<HeroesList />} />
          <Route path="/learning">
            <Route path="lifecycle" element={<LifeCycle />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
