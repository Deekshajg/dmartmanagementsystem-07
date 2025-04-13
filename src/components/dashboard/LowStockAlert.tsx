
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

interface LowStockItemProps {
  name: string;
  currentStock: number;
  minThreshold: number;
  category: string;
}

function LowStockItem({ name, currentStock, minThreshold, category }: LowStockItemProps) {
  return (
    <div className="flex items-center py-3">
      <AlertCircle className="h-4 w-4 text-dmart-orange mr-2" />
      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">
          {currentStock} units left (min: {minThreshold})
        </p>
      </div>
      <Badge variant="outline" className="ml-auto">
        {category}
      </Badge>
    </div>
  );
}

export function LowStockAlert() {
  const lowStockItems = [
    {
      name: "Whole Grain Bread",
      currentStock: 15,
      minThreshold: 20,
      category: "Bakery"
    },
    {
      name: "Fresh Milk 1L",
      currentStock: 8,
      minThreshold: 25,
      category: "Dairy"
    },
    {
      name: "Organic Apples",
      currentStock: 12,
      minThreshold: 30,
      category: "Produce"
    },
    {
      name: "Chicken Breast",
      currentStock: 5,
      minThreshold: 15,
      category: "Meat"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Low Stock Alert</CardTitle>
        <CardDescription>
          Products that need reordering soon
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {lowStockItems.map((item, index) => (
            <LowStockItem
              key={index}
              name={item.name}
              currentStock={item.currentStock}
              minThreshold={item.minThreshold}
              category={item.category}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
