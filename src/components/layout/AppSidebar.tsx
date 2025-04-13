
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Box,
  Home,
  Package2,
  ShoppingCart,
  Users,
  Warehouse
} from "lucide-react";

export function AppSidebar() {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/",
    },
    {
      title: "Products",
      icon: Package2,
      url: "/products",
    },
    {
      title: "Inventory",
      icon: Warehouse,
      url: "/inventory",
    },
    {
      title: "Sales",
      icon: ShoppingCart,
      url: "/sales",
    },
    {
      title: "Customers",
      icon: Users,
      url: "/customers",
    },
    {
      title: "Reports",
      icon: BarChart3,
      url: "/reports",
    },
  ];

  return (
    <Sidebar>
      <SidebarContent className="py-4">
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 px-1">
            <Box className="h-6 w-6 text-dmart-purple" />
            <h1 className="text-xl font-bold text-foreground">DMart Hub</h1>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      location.pathname === item.url ? 
                      "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
