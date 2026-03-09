
function Search({cityName,setCityName,handleSearchInput}) {
    return (
        <div>
            <div className="search-engine">
                <input 
                type="text" 
                name="searchCity" 
                id="searchCity"
                value={cityName} 
                placeholder="Enter the City Name"
                onChange={(e)=>setCityName(e.target.value)}/>
                <button  className="search-button" onClick={handleSearchInput}>Search</button>
            </div>
        </div>
    );
}

export default Search;