
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function SalesChart() {
  const data = [
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales Overview</CardTitle>
        <CardDescription>
          Chart showing total sales revenue for each month
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
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
  );
}
