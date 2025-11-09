export default function MediaCoverageSection() {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Telah <span className="text-cyan-500">Diliputi</span> Di Media
            <span className="text-cyan-500 ml-2">✨</span>
          </h2>
        </div>

        {/* Media logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="bg-gray-300 w-28 h-10 rounded-md" />
          <div className="bg-gray-300 w-28 h-10 rounded-md" />
          <div className="bg-gray-300 w-28 h-10 rounded-md" />
          <div className="bg-gray-300 w-28 h-10 rounded-md" />
          <div className="bg-gray-300 w-28 h-10 rounded-md" />
          <div className="bg-gray-300 w-28 h-10 rounded-md" />
        </div>
      </div>
    </section>
  );
}
