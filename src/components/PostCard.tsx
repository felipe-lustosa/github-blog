export function PostCard() {
  return (
    <div className="col-span-6 bg-base-post flex flex-col items-center gap-5 p-8 cursor-pointer rounded-lg hover:outline transition-all easy-in-out outline-2 hover:outline-base-span">
      <div className="flex justify-between items-center gap-4 w-full">
        <h3 className="text-title-md text-base-title">JavaScript data types and data structures</h3>
        <span className="text-sm text-base-span break-keep">Há 1 dia</span>
      </div>
      <p className="text-base-text rounded-lg">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
    </div>
  )
}