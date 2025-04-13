
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Download, 
  Filter, 
  MoreHorizontal, 
  Search, 
  UserPlus 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const initialCustomers = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    phone: "+1 (555) 123-4567",
    orders: 12,
    spent: 5840.50,
    status: "Active",
    lastPurchase: "2025-04-13"
  },
  {
    id: 2,
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    phone: "+1 (555) 234-5678",
    orders: 8,
    spent: 3570.25,
    status: "Active",
    lastPurchase: "2025-04-13"
  },
  {
    id: 3,
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    phone: "+1 (555) 345-6789",
    orders: 5,
    spent: 2150.00,
    status: "Active",
    lastPurchase: "2025-04-12"
  },
  {
    id: 4,
    name: "William Kim",
    email: "will.kim@email.com",
    phone: "+1 (555) 456-7890",
    orders: 15,
    spent: 7890.75,
    status: "Active",
    lastPurchase: "2025-04-12"
  },
  {
    id: 5,
    name: "Isabella Nguyen",
    email: "isabella.n@email.com",
    phone: "+1 (555) 567-8901",
    orders: 7,
    spent: 3120.40,
    status: "Inactive",
    lastPurchase: "2025-03-28"
  },
  {
    id: 6,
    name: "Ethan Johnson",
    email: "ethan.j@email.com",
    phone: "+1 (555) 678-9012",
    orders: 3,
    spent: 1490.99,
    status: "Active",
    lastPurchase: "2025-04-11"
  },
  {
    id: 7,
    name: "Mia Thompson",
    email: "mia.t@email.com",
    phone: "+1 (555) 789-0123",
    orders: 9,
    spent: 4320.30,
    status: "Active",
    lastPurchase: "2025-04-10"
  },
  {
    id: 8,
    name: "Alexander Garcia",
    email: "alex.g@email.com",
    phone: "+1 (555) 890-1234",
    orders: 2,
    spent: 780.50,
    status: "Inactive",
    lastPurchase: "2025-03-15"
  },
];

const Customers = () => {
  const [customers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(customer => customer.status === "Active").length;
  const totalSpent = customers.reduce((sum, customer) => sum + customer.spent, 0).toFixed(2);

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  }

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your customer relationships and view purchase history
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Total Customers</h2>
            <div className="text-2xl font-bold">{totalCustomers}</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Active Customers</h2>
            <div className="text-2xl font-bold">{activeCustomers}</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Total Revenue</h2>
            <div className="text-2xl font-bold">${totalSpent}</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-1 items-center border rounded-lg overflow-hidden bg-white">
            <Search className="ml-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by name, email or phone..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="gap-2" variant="outline">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredCustomers.map((customer) => (
            <Card key={customer.id} className="overflow-hidden">
              <CardHeader className="border-b bg-muted/40 p-4">
                <div className="flex items-center justify-between">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                  </Avatar>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Purchase History</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardTitle className="mt-2 text-lg">{customer.name}</CardTitle>
                <CardDescription className="text-sm">{customer.email}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Phone</span>
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Orders</span>
                    <span>{customer.orders}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total Spent</span>
                    <span>${customer.spent.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Purchase</span>
                    <span>{customer.lastPurchase}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant={customer.status === "Active" ? "outline" : "secondary"}>
                      {customer.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Customers;
