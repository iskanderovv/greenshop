import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import promoImg from "../../public/blog.png";
import { PromoSectionProps } from "@/types";



export function PromoSection({
  title,
  subtitle,
  buttonText,
}: PromoSectionProps) {
  return (
    <div className="bg-white">
      <div className="flex bg-[#FBFBFB] justify-between items-center gap-x-4 text-center p-6 space-y-4">
        <Image
          src={promoImg}
          alt="Image"
          width={150}
          height={150}
          className="rounded-md size-auto"
        />
        <div className="flex w-3/4 flex-col text-right items-end">
          <h2 className="text-lg leading-6 max-w-[160px] font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground pt-3 pb-5 max-w-[15rem]">
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
      </div>
    </div>
  );
}
