
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpDown, 
  FileSpreadsheet, 
  PackagePlus, 
  RefreshCw, 
  Search
} from "lucide-react";

const initialInventory = [
  {
    id: 1,
    name: "Whole Grain Bread",
    sku: "BKR-001",
    currentStock: 15,
    minThreshold: 20,
    location: "A-12",
    lastUpdated: "2025-04-10",
    status: "Low Stock"
  },
  {
    id: 2,
    name: "Fresh Milk 1L",
    sku: "DRY-101",
    currentStock: 8,
    minThreshold: 25,
    location: "D-05",
    lastUpdated: "2025-04-12",
    status: "Low Stock"
  },
  {
    id: 3,
    name: "Organic Apples",
    sku: "PRD-234",
    currentStock: 12,
    minThreshold: 30,
    location: "P-03",
    lastUpdated: "2025-04-11",
    status: "Low Stock"
  },
  {
    id: 4,
    name: "Chicken Breast",
    sku: "MT-543",
    currentStock: 5,
    minThreshold: 15,
    location: "M-22",
    lastUpdated: "2025-04-10",
    status: "Low Stock"
  },
  {
    id: 5,
    name: "Chocolate Chip Cookies",
    sku: "SNK-876",
    currentStock: 45,
    minThreshold: 20,
    location: "S-15",
    lastUpdated: "2025-04-12",
    status: "In Stock"
  },
  {
    id: 6,
    name: "Organic Eggs (12)",
    sku: "DRY-202",
    currentStock: 30,
    minThreshold: 15,
    location: "D-08",
    lastUpdated: "2025-04-09",
    status: "In Stock"
  },
  {
    id: 7,
    name: "Wheat Flour 2kg",
    sku: "GRN-321",
    currentStock: 25,
    minThreshold: 20,
    location: "G-11",
    lastUpdated: "2025-04-08",
    status: "In Stock"
  },
  {
    id: 8,
    name: "Orange Juice 2L",
    sku: "BVG-456",
    currentStock: 18,
    minThreshold: 15,
    location: "B-03",
    lastUpdated: "2025-04-11",
    status: "In Stock"
  },
];

const Inventory = () => {
  const [inventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockCount = inventory.filter(item => item.status === "Low Stock").length;

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your store's inventory and stock levels
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Total Products</h2>
            <div className="text-2xl font-bold">{inventory.length}</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Low Stock Items</h2>
            <div className="text-2xl font-bold text-dmart-orange">{lowStockCount}</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-semibold text-sm text-muted-foreground mb-2">Last Updated</h2>
            <div className="text-2xl font-bold">April 13, 2025</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-1 items-center border rounded-lg overflow-hidden bg-white">
            <Search className="ml-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search inventory by name, SKU or location..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="gap-2" variant="outline">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button className="gap-2" variant="outline">
            <FileSpreadsheet className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <PackagePlus className="h-4 w-4" />
            Add Stock
          </Button>
        </div>

        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex items-center">
                    Product Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Min. Threshold</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.currentStock}</TableCell>
                  <TableCell>{item.minThreshold}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell>
                    <Badge
                      variant={item.status === "In Stock" ? "outline" : "destructive"}
                    >
                      {item.status}
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

export default Inventory;
