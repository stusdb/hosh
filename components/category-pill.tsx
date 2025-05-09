import { cn } from "@/lib/utils"

interface CategoryPillProps {
  name: string
  active?: boolean
}

export default function CategoryPill({ name, active = false }: CategoryPillProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full whitespace-nowrap transition-colors",
        active ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
      )}
    >
      {name}
    </button>
  )
}
