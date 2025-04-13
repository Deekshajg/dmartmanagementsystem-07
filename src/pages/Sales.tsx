
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Download, 
  Filter, 
  Search, 
  ShoppingCart 
} from "lucide-react";

const initialSales = [
  {
    id: 1,
    orderNumber: "ORD-7841",
    customer: "Olivia Martin",
    date: "2025-04-13",
    amount: 1999.00,
    items: 4,
    status: "Completed"
  },
  {
    id: 2,
    orderNumber: "ORD-7842",
    customer: "Jackson Lee",
    date: "2025-04-13",
    amount: 1459.00,
    items: 3,
    status: "Completed"
  },
  {
    id: 3,
    orderNumber: "ORD-7843",
    customer: "Sofia Davis",
    date: "2025-04-12",
    amount: 899.00,
    items: 2,
    status: "Processing"
  },
  {
    id: 4,
    orderNumber: "ORD-7844",
    customer: "William Kim",
    date: "2025-04-12",
    amount: 2499.00,
    items: 7,
    status: "Completed"
  },
  {
    id: 5,
    orderNumber: "ORD-7845",
    customer: "Isabella Nguyen",
    date: "2025-04-12",
    amount: 1299.00,
    items: 3,
    status: "Completed"
  },
  {
    id: 6,
    orderNumber: "ORD-7846",
    customer: "Ethan Johnson",
    date: "2025-04-11",
    amount: 749.50,
    items: 2,
    status: "Cancelled"
  },
  {
    id: 7,
    orderNumber: "ORD-7847",
    customer: "Mia Thompson",
    date: "2025-04-11",
    amount: 1845.75,
    items: 5,
    status: "Completed"
  },
  {
    id: 8,
    orderNumber: "ORD-7848",
    customer: "Alexander Garcia",
    date: "2025-04-10",
    amount: 1249.99,
    items: 4,
    status: "Processing"
  },
];

const Sales = () => {
  const [sales] = useState(initialSales);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSales = sales.filter(
    (sale) =>
      sale.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0).toFixed(2);
  const totalOrders = sales.length;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Processing":
        return "warning";
      case "Cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Management</h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage all sales transactions
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Total Sales Revenue</h2>
            <div className="text-2xl font-bold">${totalSales}</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Number of Orders</h2>
            <div className="text-2xl font-bold">{totalOrders}</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Avg. Order Value</h2>
            <div className="text-2xl font-bold">
              ${(parseFloat(totalSales) / totalOrders).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-1 items-center border rounded-lg overflow-hidden bg-white">
            <Search className="ml-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by order number or customer name..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="gap-2" variant="outline">
            <CalendarIcon className="h-4 w-4" />
            Date Range
          </Button>
          <Button className="gap-2" variant="outline">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            New Sale
          </Button>
        </div>

        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order Number</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="font-medium">{sale.orderNumber}</TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>${sale.amount.toFixed(2)}</TableCell>
                  <TableCell>{sale.items}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(sale.status)}>
                      {sale.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
};

export default Sales;
