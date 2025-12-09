import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/cv" className="hover:text-blue-600">CV</Link>
        <Link href="/research" className="hover:text-blue-600">Research</Link>
      </div>
    </nav>
  )
}