import { Outlet } from "react-router-dom";

import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import AdminHeader from "./components/AdminHeader";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AdminHeader />
      <AppSidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
