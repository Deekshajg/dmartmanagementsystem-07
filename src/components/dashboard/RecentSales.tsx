
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SaleProps {
  customer: string;
  email: string;
  amount: string;
  date: string;
  initials: string;
}

function Sale({ customer, email, amount, date, initials }: SaleProps) {
  return (
    <div className="flex items-center py-3">
      <Avatar className="h-9 w-9">
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{customer}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <p className="text-sm font-medium">{amount}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
}

export function RecentSales() {
  const sales = [
    {
      customer: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "$1,999.00",
      date: "Today, 2:30 PM",
      initials: "OM"
    },
    {
      customer: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "$1,459.00",
      date: "Today, 11:32 AM",
      initials: "JL"
    },
    {
      customer: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "$899.00",
      date: "Yesterday, 5:20 PM",
      initials: "SD"
    },
    {
      customer: "William Kim",
      email: "will.kim@email.com",
      amount: "$2,499.00",
      date: "Yesterday, 2:43 PM",
      initials: "WK"
    },
    {
      customer: "Isabella Nguyen",
      email: "isabella.n@email.com",
      amount: "$1,299.00",
      date: "Yesterday, 10:10 AM",
      initials: "IN"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>
          Showing the latest 5 sales transactions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {sales.map((sale, index) => (
            <Sale
              key={index}
              customer={sale.customer}
              email={sale.email}
              amount={sale.amount}
              date={sale.date}
              initials={sale.initials}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
