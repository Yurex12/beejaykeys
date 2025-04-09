import { Outlet } from "react-router-dom";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";

import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";
import AdminHeader from "./components/AdminHeader";

export default function Dashboard() {
  return (
    <SidebarProvider
      defaultOpen={MOBILE_BREAKPOINT > window.innerWidth ? true : false}
    >
      <AdminHeader />
      <AppSidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
