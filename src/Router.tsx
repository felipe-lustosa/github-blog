import { Routes, Route } from 'react-router-dom'
import { Post } from './pages/Post'
import { Header } from './components/Header'
import { Blog } from './pages/Blog'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post">
        <Route path=":postNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}