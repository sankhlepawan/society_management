import "./App.css";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "@/src/components";

// import { supabase } from "@/utils";

import {
  Home,
  LoginPage,
  MaintenancePage,
  Noticeboard,
  BillsPage,
  ProfilePage,
  EmergencyContactsPage,
  ResidentsPage,
  AddResidentPage,
  RegisterPage,
} from "./pages";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   async function getTodos() {
  //     const data = await supabase.from("society").select();
  //     console.log("society fetced...", data);
  //     if (data && data.length > 1) {
  //       console.log(data);
  //     }
  //   }

  //   getTodos();
  // }, []);

  return (
    <BrowserRouter>
      <ToastContainer theme="light" />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

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
          <Route path="/residents" element={<ResidentsPage />} />
          <Route path="/residents/add" element={<AddResidentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
