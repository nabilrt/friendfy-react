const SearchButton = ({ children, ...props }) => {
  return (
    <button className="rounded-md bg-[#967bb6] p-3 font-semibold text-white hover:bg-purple-600 ">
      {children}
    </button>
  );
};

export default SearchButton;
