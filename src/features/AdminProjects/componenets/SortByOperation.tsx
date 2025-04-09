import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const sortByOptions = [
  { value: "updatedAt", label: "Sort by Modified" },
  { value: "createdAt", label: "Sort by Created At" },
  { value: "name", label: "Sort by Name" },
];

export default function SortByOperation() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      value={sortBy}
      onChange={handleChange}
      className="w-full rounded-md border p-2 outline-none focus:border-green-500 active:border-green-400 md:w-60"
    >
      {sortByOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
