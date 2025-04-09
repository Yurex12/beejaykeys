import { useSearchParams } from "react-router-dom";

function FilterOperation({
  filterField,
  options,
}: {
  filterField: string;
  options: { value: string; label: string }[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleStatus(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <ul className="flex w-full items-center justify-between rounded-md border px-2 py-1 md:w-fit">
      {options.map((option) => (
        <li
          className={`rounded-md px-4 py-1 text-sm hover:cursor-pointer md:text-base ${currentFilter === option.value ? "bg-green-400 text-white" : ""}`}
          key={option.value}
          onClick={() => handleStatus(option.value)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}

export default FilterOperation;
