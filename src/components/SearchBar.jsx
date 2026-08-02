function SearchBar({searchTerm, setSearchTerm}){
    return(
        <div className="search-bar">
            <label htmlFor="search">Search for Projects</label>
            <input
                type="text"
                id="search"
                placeholder="Search Projects ..."
                value= {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}
export default SearchBar;