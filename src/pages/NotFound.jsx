import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <SEO title="Page not found" path="/404" noindex />
      <p className="text-sm font-semibold text-brand-400">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-ink-400">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-ink-950"
      >
        Back to home
      </Link>
    </div>
  )
}
