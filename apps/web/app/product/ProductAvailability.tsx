export default function ProductAvailability() {
  return (
    <div className="flex items-center mb-6">
      <div className="flex items-center bg-green-50 px-3 py-1.5 rounded-full">
        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-sm font-medium text-green-700">In Stock</span>
      </div>
      <div className="ml-3 text-sm text-gray-500">
        <span>Usually ships within 24 hours</span>
      </div>
    </div>
  );
}
