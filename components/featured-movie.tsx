import Link from "next/link"
import Image from "next/image"
import { Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedMovieProps {
  title: string
  image: string
  year: string
  rating: string
  category: string
}

export default function FeaturedMovie({ title, image, year, rating, category }: FeaturedMovieProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={600}
        className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded flex items-center z-20">
        <Star className="h-3 w-3 fill-black mr-1" />
        {rating}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <Button className="bg-red-600/90 hover:bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center p-0">
          <Play className="h-7 w-7 fill-white" />
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-lg font-bold mb-1 group-hover:text-red-500 transition-colors">{title}</h3>
        <div className="flex items-center text-sm text-gray-300 gap-2">
          <span>{year}</span>
          <span>•</span>
          <span>{category}</span>
        </div>
      </div>
      <Link href="/movie/1" className="absolute inset-0 z-30">
        <span className="sr-only">عرض التفاصيل</span>
      </Link>
    </div>
  )
}
