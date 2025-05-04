type Props = {
    filterSeverity: string;
    setFilterSeverity: (val: "All" | "Low" | "Medium" | "High") => void;
    sortOrder: "Newest" | "Oldest";
    setSortOrder: (val: "Newest" | "Oldest") => void;
  };
  
  const FilterBar = ({ filterSeverity, setFilterSeverity, sortOrder, setSortOrder }: Props) => {
    return (
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {["All", "Low", "Medium", "High"].map((level) => (
            <button
              key={level}
              onClick={() => setFilterSeverity(level as any)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                filterSeverity === level
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
  
        <div className="flex items-center gap-2">
          <label htmlFor="sortOrder" className="text-sm text-black">Sort by Date:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "Newest" | "Oldest")}
            className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring"
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>  
        </div>
      </div>
    );
  };
  
  export default FilterBar;

//   ✅ This adds:

//   Clickable buttons for severity filtering
  
//   A dropdown for date sorting
  
//   Responsive layout (stacked on mobile, horizontal on desktop)
  