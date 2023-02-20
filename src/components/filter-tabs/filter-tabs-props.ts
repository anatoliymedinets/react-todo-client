import { ActiveTab } from "../../types/active-tab";

export interface FilterTabsProps {
    activeTab: ActiveTab,
    onTabChanged: (activeTab: ActiveTab) => void
}