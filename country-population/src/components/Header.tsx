import {
  ArrowLeft,
  Calendar,
  Users,
  Layers,
  Filter,
  ChevronDown,
  BarChart2,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <div className="border-b">
      <h1>Hello World</h1>
      <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-xl font-semibold flex items-center gap-2">
            Population Statistics
            <ChevronDown className="h-4 w-4" />
          </h1>
          <p className="text-sm text-muted-foreground">
            Regional population distribution and demographics
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-4 overflow-x-auto">
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          2023
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Regions
          <Badge variant="secondary" className="ml-1">
            8
          </Badge>
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Demographics
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Advanced Filters
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          Yearly
          <ChevronDown className="h-4 w-4" />
        </Button>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <BarChart2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
