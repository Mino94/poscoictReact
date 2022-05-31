import { DATA } from "./Data";
import SearchBar from "./SearchBar";
import Table from "./Table";

const FilterableTable = ({}) =>{
    const [isCheck, setIsCheck] = useState(false);
    const [filterText, setFilterText] = useState("");

    return (
        <div>
          <SearchBar isCheck={isCheck} setIsCheck={setIsCheck} filterText={filterText} setFilterText ={setFilterText} />
          <Table data={Data} isCheck={isCheck} filterText={filterText} />
        </div>
      );
};

export default FilterableTable;