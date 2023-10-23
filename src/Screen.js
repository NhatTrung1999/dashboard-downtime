import React from "react";
import { SideBar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { MaintenanceQueue } from "./components/MaintenanceQueue";
import { MachineHistory } from "./components/MachineHistory";
import PartInventory from "./components/PartInventory";
import Staff from "./components/Staff";
import { Routes, Route } from "react-router-dom";

const sideBarMenu = [
  {
    path: "/screen/dashboard",
    active: 0,
    text: "Dashboard",
  },
  {
    path: "/screen/maintenancequeue",
    active: 1,
    text: "Maintenance Queue",
  },
  {
    path: "/screen/machinehistory",
    active: 2,
    text: "Machine History",
  },
  {
    path: "/screen/partinventory",
    active: 3,
    text: "Part Inventory",
  },
  {
    path: "/screen/staff",
    active: 4,
    text: "Staff",
  },
];

export default function Screen() {
  return (
    <>
      <SideBar sideBarMenu={sideBarMenu}>
        <SidebarRoutes />
      </SideBar>
    </>
  );
}

function SidebarRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/maintenancequeue" element={<MaintenanceQueue />} />
      <Route path="/machinehistory" element={<MachineHistory />} />
      <Route path="/partinventory" element={<PartInventory />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
  );
}
