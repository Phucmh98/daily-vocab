import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import SidebarHeader from "./components/sidebar-inset";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full w-max-7xl">
        <SidebarHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
