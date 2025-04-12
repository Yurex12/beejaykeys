import LinkButton from "./LinkButton";

function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
        404 Not Found 🥴
      </h1>
      <p className="text-center">
        Sorry, the page your are looking for doesn't exist
      </p>
      <LinkButton to="/" className="w-24 bg-green-400 py-2" name="Go Home" />
    </div>
  );
}

export default NotFound;
