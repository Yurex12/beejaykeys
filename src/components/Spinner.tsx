const Spinner = () => {
  return (
    <div className="mx-auto flex h-screen w-full items-center justify-center gap-x-4">
      <div className="loader"></div>
      <span className="md:text-xl">Loading...</span>
    </div>
  );
};
export default Spinner;
