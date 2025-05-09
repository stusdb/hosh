import Link from "next/link"
import Image from "next/image"
import { Star, Play } from "lucide-react"

interface MovieCardProps {
  title: string
  image: string
  year: string
  rating: string
}

export default function MovieCard({ title, image, year, rating }: MovieCardProps) {
  return (
    <Link href="/movie/1" className="group">
      <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600/80 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Play className="h-6 w-6 fill-white text-white" />
          </div>
        </div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded flex items-center z-20">
          <Star className="h-3 w-3 fill-black mr-0.5" />
          {rating}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm line-clamp-1 group-hover:text-red-500 transition-colors">{title}</h3>
        <p className="text-xs text-gray-400">{year}</p>
      </div>
    </Link>
  )
}
