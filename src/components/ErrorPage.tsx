function ErrorPage({ onRetry }: { onRetry?: VoidFunction }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
        Oops! Something went wrong.
      </h1>
      <p className="mb-6 text-center text-gray-600 md:text-lg">
        Please try again.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded bg-green-400 px-6 py-2 font-bold text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorPage;
