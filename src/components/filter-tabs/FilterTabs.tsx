/* eslint-disable jsx-a11y/anchor-is-valid */

import { ActiveTab } from "../../types/active-tab";
import { FilterTabsProps } from "./filter-tabs-props";

const FilterTabs: React.FC<FilterTabsProps> = ({ onTabChanged, activeTab }) => {

  const onTabChangedClick = (e: React.MouseEvent, activeTab: ActiveTab) => {
    e.preventDefault();

    onTabChanged(activeTab);
  };

  return (
    <div className="tabs is-centered is-toggle is-toggle-rounded ">
      <ul>
        <li className={activeTab === 'All' ? 'is-active' : undefined}>
          <a onClick={(e) => onTabChangedClick(e, "All")}>
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true"></i>
            </span>
            <span>All</span>
          </a>
        </li>
        <li className={activeTab === 'Active' ? 'is-active' : undefined}>
          <a onClick={(e) => onTabChangedClick(e, "Active")}>
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true"></i>
            </span>
            <span>Active</span>
          </a>
        </li>
        <li className={activeTab === 'Done' ? 'is-active' : undefined}>
          <a onClick={(e) => onTabChangedClick(e, "Done")}>
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true"></i>
            </span>
            <span>Done</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FilterTabs;
