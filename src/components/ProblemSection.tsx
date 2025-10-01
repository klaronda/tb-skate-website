import reviewMarkersImage from 'figma:asset/d44b9f85cc95025724d459b97a3643873f564ba2.png';

export function ProblemSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="mb-6 text-4xl text-white">
              The Problem
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              Action sports have no reliable machine understanding. Tricks, stances, and style are invisible to standard AI models.
            </p>
            
            <div className="mb-8 p-6 bg-gray-700 rounded-lg border-l-4 border-blue-400">
              <h3 className="mb-3 text-white">The Opportunity</h3>
              <p className="text-gray-300">
                We're training a foundation model that businesses can use for content creation platforms, event analytics, or action sports data products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4" role="comparison" aria-label="AI capability comparison">
              <div className="p-4 bg-gray-600 rounded-lg border border-red-500/30" role="article" aria-labelledby="standard-ai">
                <h4 id="standard-ai" className="mb-2 text-red-300">Standard AI</h4>
                <p className="text-sm text-red-200">Sees "person with board"</p>
              </div>
              <div className="p-4 bg-gray-600 rounded-lg border border-green-500/30" role="article" aria-labelledby="trickbase-ai">
                <h4 id="trickbase-ai" className="mb-2 text-green-300">Trickbase AI</h4>
                <p className="text-sm text-green-200">Labels: pop, flick, catch, rollaway</p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <img
              src={reviewMarkersImage}
              alt="Video analysis interface showing skateboard trick breakdown with review markers"
              className="w-full h-80 object-contain rounded-lg bg-gray-800"
              loading="lazy"
              decoding="async"
            />
            {/* Overlay removed to showcase video review markers */}
          </div>
        </div>
      </div>
    </section>
  );
}