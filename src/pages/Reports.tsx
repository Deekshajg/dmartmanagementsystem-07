
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bar, 
  BarChart, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis, 
  Pie,
  PieChart,
  Cell,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet } from "lucide-react";

const salesData = [
  {
    name: "Jan",
    total: 3400,
  },
  {
    name: "Feb",
    total: 4500,
  },
  {
    name: "Mar",
    total: 5200,
  },
  {
    name: "Apr",
    total: 4800,
  },
  {
    name: "May",
    total: 6300,
  },
  {
    name: "Jun",
    total: 5900,
  },
  {
    name: "Jul",
    total: 7200,
  },
  {
    name: "Aug",
    total: 7800,
  },
  {
    name: "Sep",
    total: 6800,
  },
  {
    name: "Oct",
    total: 8100,
  },
  {
    name: "Nov",
    total: 9400,
  },
  {
    name: "Dec",
    total: 10200,
  },
];

const categoryData = [
  { name: "Produce", value: 2400 },
  { name: "Bakery", value: 1567 },
  { name: "Dairy", value: 1987 },
  { name: "Meat", value: 3045 },
  { name: "Grocery", value: 5214 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const Reports = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">
            View detailed reports and insights about your business
          </p>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <FileSpreadsheet className="h-4 w-4" />
            Export to Excel
          </Button>
        </div>

        <Tabs defaultValue="sales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="sales">Sales Reports</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Reports</TabsTrigger>
            <TabsTrigger value="customers">Customer Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sales" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$74,400.00</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +12% from previous year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,594</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +8% from previous year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$28.68</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +3% from previous year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +0.5% from previous year
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Sales Overview</CardTitle>
                  <CardDescription>
                    Chart showing total sales revenue for each month
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={salesData}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip
                        formatter={(value: number) => [`$${value}`, 'Revenue']}
                        cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                      />
                      <Bar
                        dataKey="total"
                        fill="#8B5CF6"
                        radius={[4, 4, 0, 0]}
                        className="fill-dmart-purple"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sales by Category</CardTitle>
                  <CardDescription>
                    Distribution of sales across product categories
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Levels</CardTitle>
                <CardDescription>
                  Stock levels across all product categories
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart
                    data={[
                      { category: "Produce", stock: 250 },
                      { category: "Bakery", stock: 150 },
                      { category: "Dairy", stock: 180 },
                      { category: "Meat", stock: 120 },
                      { category: "Grocery", stock: 350 },
                      { category: "Beverages", stock: 220 },
                      { category: "Snacks", stock: 280 },
                      { category: "Frozen", stock: 190 },
                    ]}
                    layout="vertical"
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="category" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value} units`, 'Current Stock']} />
                    <Bar dataKey="stock" fill="#0EA5E9" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>
                  Customer acquisition over the past 12 months
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart
                    data={[
                      { month: "Jan", customers: 150 },
                      { month: "Feb", customers: 172 },
                      { month: "Mar", customers: 198 },
                      { month: "Apr", customers: 230 },
                      { month: "May", customers: 275 },
                      { month: "Jun", customers: 315 },
                      { month: "Jul", customers: 370 },
                      { month: "Aug", customers: 432 },
                      { month: "Sep", customers: 489 },
                      { month: "Oct", customers: 537 },
                      { month: "Nov", customers: 598 },
                      { month: "Dec", customers: 650 },
                    ]}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} customers`, 'Total']} />
                    <Line type="monotone" dataKey="customers" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Reports;
