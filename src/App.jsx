import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import User from "./pages/User";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import ProductsPage from "./features/Products/ProductsPage";
import ScrollToTop from "./utils/ScrollToTop";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="settings" element={<Settings />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="/products/:category" element={<ProductsPage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
}
export default App;
