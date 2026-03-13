// components/Tabs.tsx
import { useState } from "react";
import "../styles/UserTab.css";

interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    defaultTab?: string;
}

export function Tabs({ tabs }: TabsProps) {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "");

    return (
        <div className='user-tab-Wrapper'>
            {/* Tab List */}
            <div className="tabList" role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        aria-controls={`panel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tabButton ${activeTab === tab.id ? 'tabButtonActive' : ""
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    id={`panel-${tab.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${tab.id}`}
                    hidden={activeTab !== tab.id}
                    className="tabContent"
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
}
