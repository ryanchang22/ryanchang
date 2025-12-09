export default function CV() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
        
        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <div className="mb-4">
            <p className="font-semibold">University Name</p>
            <p className="text-gray-600">Degree, Year</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Publications</h2>
          <p>Your publications here...</p>
        </section>
      </div>
    </main>
  )
}