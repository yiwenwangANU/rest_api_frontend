import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/AuthLayout";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SinglePost from "./pages/SinglePost";

const root = document.getElementById("root");
const queryClient = new QueryClient();

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route element={<AppLayout />}>
          <Route path="about" element={<About />} />
          <Route path="post/:id" element={<SinglePost />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
