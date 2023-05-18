import { Link } from 'react-router-dom'

interface PostCardProps {
  post: any
}

export function PostCard({ post }: PostCardProps) {

  return (
    <Link to={`post/${post.number}`} className="col-span-6 xl:col-span-4 bg-base-post flex flex-col items-center max-h-72 gap-5 p-8 cursor-pointer rounded-lg hover:outline transition-all easy-in-out outline-2 hover:outline-base-span">
      <div className="flex justify-between items-center gap-4 w-full">
        <h3 className="text-title-md text-base-title">{post.title}</h3>
        <span className="text-sm text-base-span break-keep">Há 1 dia</span>
      </div>
      <p className="text-base-text rounded-lg overflow-hidden">{post.body}</p>
    </Link>
  )
}