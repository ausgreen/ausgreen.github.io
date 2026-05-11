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
            I build automated decision systems across the full AI spectrum — from classical
            machine learning to large language models.
          </p>
          <p>
            My focus is on model governance and measurement: making sure AI systems do what
            they're supposed to do, at scale, in production. I hold a Master of Science in
            Analytics from Georgia Tech.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Projects
        </h2>
        <div>
          <a href="/snap-simple/privacy" className="group block">
            <h3 className="font-medium text-gray-900 group-hover:text-gray-500 transition-colors mb-1">
              Snap Simple
            </h3>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            A camera companion app for CampSnap cameras. Transfer and manage photos
            directly from your camera to your device — no cloud, no accounts.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Android"].map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
