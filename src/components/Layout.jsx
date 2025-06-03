import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 ml-0 md:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        <main id="main-outlet" className="p-4 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
