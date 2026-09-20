import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Legal page="privacy" />} />
      <Route path="/terms" element={<Legal page="terms" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
