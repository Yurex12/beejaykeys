export default function NoData() {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border-2 p-8">
      <h2 className="text-center text-xl font-semibold text-gray-700">
        Nothing to display at the moment
      </h2>
      <p className="mt-2 text-center text-sm text-gray-500">
        Start by creating one.
      </p>
    </div>
  );
}
