export default function Newsletter() {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left Text */}
        <div className="md:w-1/2 text-left justify-start align-start">
          <h2 className="font-serif text-3xl mb-4">
            Join The Circle
          </h2>
          <p className="mt-4 text-gray-500 max-w-md">
            Subscribe for early access to new collections, editorial stories, and exclusive events.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full">
          <div className="flex items-end w-full border-b border-gray-300 pb-4 hover:border-[#155dfc]">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent pb-2 text-xl outline-none placeholder:text-[#6b7280] "
            />

            <button className="whitespace-nowrap pt-6 text-xs tracking-widest hover:text-[#155dfc] ">
              SIGN UP
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
