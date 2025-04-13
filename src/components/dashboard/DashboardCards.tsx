
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, BarChart4, CircleDollarSign, Package, Users } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
}

function StatsCard({ title, value, icon, change }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            {change.positive ? (
              <ArrowUpIcon className="mr-1 h-3 w-3 text-dmart-green" />
            ) : (
              <ArrowDownIcon className="mr-1 h-3 w-3 text-dmart-red" />
            )}
            <span className={change.positive ? "text-dmart-green" : "text-dmart-red"}>
              {change.value} since last month
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        value="$45,231.89"
        icon={<CircleDollarSign className="h-4 w-4" />}
        change={{ value: "12%", positive: true }}
      />
      <StatsCard
        title="Total Sales"
        value="2,345"
        icon={<BarChart4 className="h-4 w-4" />}
        change={{ value: "8%", positive: true }}
      />
      <StatsCard
        title="Active Products"
        value="485"
        icon={<Package className="h-4 w-4" />}
        change={{ value: "3%", positive: false }}
      />
      <StatsCard
        title="Active Customers"
        value="1,257"
        icon={<Users className="h-4 w-4" />}
        change={{ value: "14%", positive: true }}
      />
    </div>
  );
}
