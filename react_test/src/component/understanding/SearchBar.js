
const SearchBar = ({ isCheck, setIsCheck, filterText, setFilterText }) => {
    return (
        <form>
          <input type={"text"} value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder="Search..." />
          <p>
            <input type={"checkbox"} onChange={(e) => setIsCheck(!isCheck)} checked={isCheck} />
            Only show products in stock
          </p>
        </form>
      );
};
