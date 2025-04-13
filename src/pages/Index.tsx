
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { LowStockAlert } from "@/components/dashboard/LowStockAlert";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your store's performance and recent activities
          </p>
        </div>
        
        <DashboardCards />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <SalesChart className="lg:col-span-4" />
          <div className="lg:col-span-3 space-y-6">
            <RecentSales />
            <LowStockAlert />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
