const Search = () => {
  return (
    <div className="search flex flex-row justify-between items-center bg-stone-200 shadow-xl rounded-full p-1 mx-5 mt-5">
      <input
        className="text-xs text-white p-3 bg-transparent w-full"
        type="text"
        placeholder="Search for specific marker"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#1b631b"
        className="size-10 me-3 bg-amber-400 px-2 rounded-[2em]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default Search;
