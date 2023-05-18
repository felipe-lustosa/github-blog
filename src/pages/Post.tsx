import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { Header } from '../components/Header';
import { formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR"
import ReactMarkdown from 'react-markdown'

export function Post() {
  const { postNumber } = useParams();
  const [post, setPost]: any = useState({});
  console.log("🚀 ~ file: Post.tsx:8 ~ Post ~ post:", post)

  function fetchPost() {
    api.get(`repos/felipe-lustosa/github-blog/issues/${postNumber}`).then((response) => {
      setPost(response.data)
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  if (Object.keys(post).length === 0)
    return <div className='w-full h-screen bg-base-background flex items-center justify-center'>
      <span className='text-white'>Carregando...</span>
    </div>

  return (
    <div className="flex flex-col w-screen min-h-screen bg-base-background items-center pb-8">
      <Header />

      <main className="w-8/12 flex flex-col">
        <div className="bg-base-profile flex flex-col p-8 -mt-16 rounded-lg">

          <div className='flex justify-between'>
            <Link to='/' className='flex items-center gap-2'>
              <img src='/assets/back.svg' />
              <span className='text-brand-blue text-link'>VOLTAR</span>
            </Link>
            <a className="text-brand-blue text-link flex gap-2 items-center cursor-pointer" href={post.html_url}>VER NO GITHUB <img src="/assets/link.svg" /></a>
          </div>

          <h2 className="text-base-title text-title-lg mt-5">{post.title}</h2>

          <div className="flex gap-6 items-center mt-2">
            <div className="flex gap-2">
              <img src="/assets/github.svg" />
              <span className="text-base-span">{post.user.login}</span>
            </div>
            <div className="flex gap-2">
              <img src="/assets/calendar.svg" />
              <span className="text-base-span">{formatDistanceToNow(new Date(post.updated_at), { addSuffix: true, locale: ptBR })}</span>
            </div>
            <div className="flex gap-2">
              <img src="/assets/chat.svg" />
              <span className="text-base-span">{`${post.comments} comentários`}</span>
            </div>
          </div>


        </div>
        <ReactMarkdown className='text-base-text p-8'>{post.body}</ReactMarkdown>
      </main>
    </div>
  )
}