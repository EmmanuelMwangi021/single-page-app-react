function SearchBar(){
    return(
        <div>
            <label htmlFor="search">Search for Projects</label>
            <input
                type="text"
                id="search"
                placeholder="Search Projects ..."
            />
        </div>
    );
}
export default SearchBar;