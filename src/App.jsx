import "./App.css";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./components";

import {
  Home,
  Login,
  MaintenancePage,
  Noticeboard,
  BillsPage,
  ProfilePage,
  EmergencyContactsPage,
} from "./pages";
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
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/emergency" element={<EmergencyContactsPage />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
