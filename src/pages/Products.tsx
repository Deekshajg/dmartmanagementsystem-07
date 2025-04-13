
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Mock data for products
const initialProducts = [
  {
    id: 1,
    name: "Whole Grain Bread",
    sku: "BKR-001",
    price: 4.99,
    category: "Bakery",
    stock: 15,
    status: "In Stock"
  },
  {
    id: 2,
    name: "Fresh Milk 1L",
    sku: "DRY-101",
    price: 3.49,
    category: "Dairy",
    stock: 8,
    status: "Low Stock"
  },
  {
    id: 3,
    name: "Organic Apples",
    sku: "PRD-234",
    price: 6.99,
    category: "Produce",
    stock: 12,
    status: "Low Stock"
  },
  {
    id: 4,
    name: "Chicken Breast",
    sku: "MT-543",
    price: 8.99,
    category: "Meat",
    stock: 5,
    status: "Low Stock"
  },
  {
    id: 5,
    name: "Chocolate Chip Cookies",
    sku: "SNK-876",
    price: 4.49,
    category: "Snacks",
    stock: 45,
    status: "In Stock"
  },
  {
    id: 6,
    name: "Organic Eggs (12)",
    sku: "DRY-202",
    price: 5.99,
    category: "Dairy",
    stock: 30,
    status: "In Stock"
  },
  {
    id: 7,
    name: "Wheat Flour 2kg",
    sku: "GRN-321",
    price: 3.99,
    category: "Grains",
    stock: 25,
    status: "In Stock"
  },
  {
    id: 8,
    name: "Orange Juice 2L",
    sku: "BVG-456",
    price: 4.99,
    category: "Beverages",
    stock: 18,
    status: "In Stock"
  },
];

const Products = () => {
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground mt-1">
              Manage your product catalog and inventory
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        </div>

        <div className="flex items-center border rounded-lg overflow-hidden bg-white">
          <Search className="ml-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search products by name, SKU or category..."
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant={product.status === "In Stock" ? "outline" : "destructive"}
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default Products;
