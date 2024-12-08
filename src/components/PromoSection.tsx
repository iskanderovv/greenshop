import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface PromoSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export function PromoSection({
  title,
  subtitle,
  buttonText,
}: PromoSectionProps) {
  return (
    <Card className="bg-white">
      <CardContent className="flex bg-[#FBFBFB] justify-between items-center gap-x-4 text-center p-6 space-y-4">
        <Image
          src="https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg"
          alt="Image"
          width={150}
          height={150}
          className="rounded-md size-auto"
        />
        <div className="flex flex-col items-end">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground max-w-[15rem]">
            {subtitle}
          </p>
          <Button
            asChild
            variant="default"
            className="bg-[#55B96C] hover:bg-[#4ca861]"
          >
            <Link href="#" className="flex items-center gap-2">
              {buttonText}
              <span>→</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
