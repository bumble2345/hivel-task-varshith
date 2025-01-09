import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
}

export function StatsCard({ title, value, change, period }: StatsCardProps) {
  const isIncrease = change > 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          <span
            className={cn(
              "inline-flex items-center",
              isIncrease ? "text-green-600" : "text-red-600"
            )}
          >
            {isIncrease ? (
              <ArrowUpIcon className="mr-1 h-4 w-4" />
            ) : (
              <ArrowDownIcon className="mr-1 h-4 w-4" />
            )}
            {Math.abs(change)}%
          </span>{" "}
          vs {period}
        </p>
      </CardContent>
    </Card>
  );
}
