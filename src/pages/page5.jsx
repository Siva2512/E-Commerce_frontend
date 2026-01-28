export default function Newsletter() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="font-serif text-3xl mb-4">
            Join The Circle
          </h2>
          <p className="mt-4 text-gray-500 max-w-md">
            Subscribe for early access to new collections, editorial stories, and exclusive events.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full">
          <div className="flex items-center w-full border-b border-gray-300 pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />

            <button className="text-xs font-bold tracking-widest hover:text-gray-600 transition px-6 py-4 uppercase whitespace-nowrap">
              SIGN UP
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
