export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-gray-900">
      {/* Header */}
      <section className="mb-20">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Austin Green</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Data scientist based in Birmingham, AL.
        </p>
        <div className="flex gap-4 mt-5">
          <a
            href="mailto:austin@austingreen.net"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            austin@austingreen.net
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="https://www.linkedin.com/in/austin-green-b2aba16a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          About
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I work at the intersection of data, statistics, and software — turning messy
            real-world data into decisions and tools that people actually use.
          </p>
          <p>
            I hold a Master of Science in Analytics from Georgia Tech and spend my time on
            problems in machine learning, geospatial analysis, and data engineering.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Projects
        </h2>
        <p className="text-gray-400 text-sm">Coming soon.</p>
      </section>
    </main>
  );
}
