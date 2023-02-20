import { SearchPanelProps } from "./search-panel-props";

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearchChanged }) => {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input
          className="input is-info"
          type="text"
          placeholder="Search"
          onChange={(e) => onSearchChanged(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchPanel;
