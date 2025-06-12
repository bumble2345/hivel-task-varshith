import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface RegionTabsProps {
  regions: string[];
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export function RegionTabs({
  regions,
  selectedRegion,
  onRegionChange,
}: RegionTabsProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <h1>Hello World</h1>
      <div className="flex w-max space-x-4 p-4">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              selectedRegion === region
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted"
            )}
          >
            {region}
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
