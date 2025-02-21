import AddButton from "@/components/AddButton";

function AdminProjectHeader() {
  return (
    <section>
      <div className="mx-auto mt-28 px-8 md:px-14">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            Projects
          </h1>
          <AddButton onClick={() => {}} />
        </div>
      </div>
    </section>
  );
}

export default AdminProjectHeader;
