import React from "react";
import { useGetCountryInfoQuery } from "../services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContextMenuProps {
  x: number;
  y: number;
  entity: any;
  onClose: () => void;
  onDrillDown: (entity: any) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  entity,
  onClose,
  onDrillDown,
}) => {
  const { data: countryInfo } = useGetCountryInfoQuery(entity.country);

  return (
    <Card className="absolute z-10 w-64" style={{ top: y, left: x }}>
      <CardHeader>
        Hello world
        <CardTitle>{entity.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>PopulationHello: {entity.population}</p>
        {countryInfo && (
          <>
            <p>Currency: {countryInfo.data.currency}</p>
            <p>Dial Code: {countryInfo.data.dialCode}</p>
            <p>Flag: {countryInfo.data.unicodeFlag}</p>
          </>
        )}
        <div className="mt-4 flex justify-between">
          <Button onClick={() => onDrillDown(entity)}>Drill Down</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContextMenu;
