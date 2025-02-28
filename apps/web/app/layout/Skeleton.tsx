export function LoadingSkeleton() {
  return (
    <div className="animate-pulse max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="pb-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <div className="h-8 bg-gray-200 rounded-lg w-48"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-sm bg-white border border-gray-100 flex flex-col h-full"
              >
                <div className="aspect-[4/3] w-full bg-gray-200 relative">
                  <div className="absolute top-0 right-0 m-3 h-6 w-16 bg-gray-300 rounded-full"></div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="h-6 w-20 bg-gray-200 rounded-full mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className="w-4 h-4 bg-gray-200 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 mb-4"></div>
                  <div className="mt-auto h-9 bg-gray-200 rounded-lg w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
          </div>
          <div className="h-6 w-40 bg-gray-200 rounded"></div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
            <div className="h-9 w-9 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
