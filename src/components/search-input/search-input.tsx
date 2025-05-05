interface SearchInputProps {
    search: string
    setSearch: (value: string) => void
}

const SearchInput = ({search, setSearch}: SearchInputProps) => {
    return (
        <div className="relative w-full max-w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Поиск..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                 transition-all duration-200 outline-none
                 placeholder:text-gray-400 text-gray-700
                 hover:border-gray-400"
            />
        </div>
    );
};

export default SearchInput;