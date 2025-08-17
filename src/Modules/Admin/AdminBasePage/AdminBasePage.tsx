import { AdminDashBoard } from "@modules/Admin/AdminDashBoard/AdminDashBoard";
import AdminHeadNavBar from "@modules/Admin/AdminHeadNavBar/AdminHeadNavBar";
import { AbilitiesManagement } from "@modules/Admin/AbilitiesManagement/AbilitiesManagement";
import { Sidebar } from "@core/ui/Sidebar";
import { useState } from "react";
import { Squares2X2Icon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Page } from "@app";
import { AdminMainPageController } from "./AdminBasePageController";
import { SidebarItem } from "@core/uiController/SidebarController"; // Corrected import path

export interface AdminMainPageProps {
  onNavigate: (page: Page) => void;
  onLogin: (user: any) => void;
}

export const AdminBasePage: React.FC<AdminMainPageProps> = ({ onNavigate, onLogin }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const controller = new AdminMainPageController(
    { onNavigate, onLogin },
    setSidebarOpen,
    setCurrentPage
  );

  const sidebarItems: SidebarItem[] = [
    {
      id: "dashboard",
      label: "Admin Dashboard",
      icon: Squares2X2Icon,
      onClick: () => controller.selectPage("dashboard"),
    },
    {
      id: "abilities",
      label: "Abilities Management",
      icon: ShieldCheckIcon,
      onClick: () => controller.selectPage("abilities"),
    },
  ];


  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        collapsed={!sidebarOpen} // Use sidebarOpen from AdminMainPageController
        activeItem={currentPage} // Get active page from local state
        items={sidebarItems}
        onItemClick={(item) => controller.selectPage(item.id)}
        onToggle={() => controller.toggleSidebar()} // Use controller's toggleSidebar
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeadNavBar onCollapseToggle={controller.toggleSidebar} onSignOut={controller.handleSignOut} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4">
          {currentPage === "dashboard" && <AdminDashBoard />}
          {currentPage === "abilities" && <AbilitiesManagement />}
        </main>
      </div>
    </div>
  );
};