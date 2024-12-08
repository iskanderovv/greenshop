import Image from "next/image";
import { Plant } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  plant: Plant;
}

export function ProductCard({ plant }: ProductCardProps) {
  return (
    <Card className="overflow-hidden drop-shadow-sm">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <img
            src={plant.image}
            alt={plant.name}
            
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="font-medium">{plant.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">${plant.price}</span>
          {plant.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${plant.originalPrice}
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
