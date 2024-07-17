"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(` ${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className=' border border-primary-800 flex'>
      {/* <button
        onClick={() => handleFilter("all")}
        className=' px-5 py-2 hover:bg-primary-700'
      >
        All cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className=' px-5 py-2 hover:bg-primary-700'
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className=' px-5 py-2 hover:bg-primary-700'
      >
        4&mdash;7 guests
      </button>
      <button
        onClick={() => handleFilter("large")}
        className=' px-5 py-2 hover:bg-primary-700'
      >
        7&mdash;12 guests
      </button> */}
      <Button
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`  px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
