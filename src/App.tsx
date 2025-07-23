import { BrowserRouter } from "react-router";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "@/providers/AuthContextProvider";
import FavoriteContextProvider from "./providers/FavoriteContextProvider";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";


const client = new QueryClient();
function App() {
  return (
    <AuthContextProvider>
      <FavoriteContextProvider>
        <QueryClientProvider client={client}>
          <ToastContainer />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </FavoriteContextProvider>
    </AuthContextProvider>
  );
}

export default App;
