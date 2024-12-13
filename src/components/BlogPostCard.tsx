import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  readTime: string
  image: string
  slug: string
}

export function BlogPostCard({
  title,
  description,
  date,
  readTime,
  image,
  slug,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[3/2] ">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex text-[#55B96C] items-center gap-2 text-sm text-muted-foreground">
            <span>{date}</span>
            <span>•</span>
            <span>Read in {readTime}</span>
          </div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-[#727272] text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Link href={`/blog/${slug}`} className="hover:text-[#4ca861] text-sm font-medium">
          Read More →
        </Link>
      </CardFooter>
    </Card>
  )
}

