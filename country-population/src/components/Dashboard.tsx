import React, { useState } from "react";
import { useGetCountriesQuery } from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Header } from "./Header";
import { RegionTabs } from "./RegionTabs";
import { StatsCard } from "./StatsCard";

const regions = [
  "Select Country",
  "Arab World",
  "Caribbean small states",
  "Central Europe and the Baltics",
  "Early-demographic dividend",
  "East Asia & Pacific",
  "East Asia & Pacific (excluding high income)",
  "Europe & Central Asia",
];

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const { data: countriesData, isLoading } = useGetCountriesQuery();

  const chartData = React.useMemo(() => {
    if (!countriesData?.data) return [];
    return countriesData.data.slice(0, 10).map((item: any) => ({
      name: item.country,
      population: item.populationCounts?.[0]?.value || 0,
    }));
  }, [countriesData]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-1 overflow-auto">
        <RegionTabs
          regions={regions}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
        <div className="grid gap-4 p-4 md:grid-cols-3">
          <StatsCard
            title="Total Population"
            value="1.2B"
            change={-35}
            period="previous year"
          />
          <StatsCard
            title="Average Growth Rate"
            value="2.4%"
            change={12}
            period="previous year"
          />
          <StatsCard
            title="Population Density"
            value="342/km²"
            change={-8}
            period="previous year"
          />
        </div>
        <div className="p-4">
          <div className="rounded-xl border bg-card">
            <div className="p-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="population"
                    fill="#8884d8"
                    name="Population"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
