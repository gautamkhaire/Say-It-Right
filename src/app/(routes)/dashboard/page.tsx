"use client";
import React, { useContext } from "react";
import Sidebar from "@/components/Sidebar";
import { SidebarItem } from "@/components/Sidebar";
import { SidebarContext } from "@/context/SidebarContext";
import { BarChart3, LayoutDashboard, Mic, Settings, Info } from "lucide-react";

import Dashboard from "@/components/DashboardComponents/Dashboard";
import Statistics from "@/components/DashboardComponents/Statistics";
import Practice from "@/components/DashboardComponents/Practice";
import Setting from "@/components/DashboardComponents/Settings";
import Help from "@/components/DashboardComponents/Help";

function Page() {
  const contextSidebar = useContext(SidebarContext);

  if (!contextSidebar) {
    return null;
  }

  const { selected, setSelected } = contextSidebar;

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <aside className="h-screen sticky top-0">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={24} />}
            text="Dashboard"
            alert={true}
          />
          <SidebarItem
            icon={<BarChart3 size={24} />}
            text="Statistics"
            active={true}
          />
          <SidebarItem icon={<Mic size={24} />} text="Practice" />
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={24} />}
            text="Settings"
            alert={true}
          />
          <SidebarItem icon={<Info size={24} />} text="Help" />
        </Sidebar>
      </aside>
      {/* Content Section */}
      <div className="flex items-center justify-center w-full">
        {(selected === "Dashboard" && <Dashboard />) ||
          (selected == "Statistics" && <Statistics />) ||
          (selected == "Practice" && <Practice />) ||
          (selected == "Settings" && <Setting />) ||
          (selected == "Help" && <Help />)}
      </div>
    </div>
  );
}

export default Page;
