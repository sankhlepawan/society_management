import "./App.css";
import { ToastContainer } from "react-toastify";

import { Home, Login, Request, Noticeboard } from "./pages";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="light" />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<Request />} />
          <Route path="/noticeboard" element={<Noticeboard />} />

          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
