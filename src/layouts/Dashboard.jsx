import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from "lucide-react";
import SidebarMenu from "../components/SidebarMenu";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex flex-row">
      <SidebarMenu isOpen={openSidebar} closeSidebar={() => setOpenSidebar(false)}/>
      <div className="flex flex-col flex-1/2">
        <Navbar openSidebar={() =>setOpenSidebar(true)}/>

        <main className="flex-1 p-4 dark:bg-[var(--bg-primary)]">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
