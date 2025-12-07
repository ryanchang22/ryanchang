export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <p className="text-xl text-gray-600 mb-8">Researcher | Your Field</p>
        
        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p>Your bio here...</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Research Interests</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Interest 1</li>
            <li>Interest 2</li>
            <li>Interest 3</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
