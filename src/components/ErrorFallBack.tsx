import { Button } from "./ui/button";

function ErrorFallBack({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
        Oops! Something went wrong 😰🥴
      </h1>
      <p className="mb-6 text-center text-gray-600 md:text-lg">
        {error.message}
      </p>
      <Button
        className="w-28 bg-green-500 hover:bg-green-600"
        onClick={resetErrorBoundary}
      >
        Retry
      </Button>
    </div>
  );
}

export default ErrorFallBack;
