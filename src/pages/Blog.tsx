import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import { ProfileCard } from "../components/ProfileCard";
import { api } from "../services/api";

export function Blog() {
  const [postCards, setPostCards]: any = useState([])
  const [searchedPost, setSearchedPost]: any = useState('')
  console.log("🚀 ~ file: blog.tsx:10 ~ Blog ~ searchedPost:", searchedPost)
  console.log("🚀 ~ file: blog.tsx:9 ~ Blog ~ postCards:", postCards)

  function fetchPostCards() {
    api.get(`search/issues?q=repo:felipe-lustosa/github-blog`).then(response => {
      setPostCards(response.data.items)
    })
  }

  // function handleSearchPost(input) {

  // }

  useEffect(() => {
    fetchPostCards()
  }, [])

  return (
    <div className="flex flex-col w-screen min-h-screen bg-base-background items-center pb-8">
      <Header />

      <main className="w-8/12 flex flex-col">
        <ProfileCard />

        <div className="flex justify-between mt-16 mb-3">
          <h2 className="text-title-sm text-base-subtitle">Publicações</h2>
          <span className="text-base-span text-sm">{`${postCards.length} publicações`}</span>
        </div>
        <input
          className="w-full border border-base-border bg-base-input px-4 py-3 rounded-md text-base-text"
          placeholder="Buscar conteúdo"
          value={searchedPost}
          onChange={(input) => setSearchedPost(input.target.value)}
        />

        <div className="grid grid-cols-12 gap-8 mt-12">
          {postCards?.map((post: any) => {
            if (post.title.toLowerCase().includes(searchedPost.toLowerCase()))
              return <PostCard post={post} />
          })}
        </div>
      </main>

    </div>
  )
}