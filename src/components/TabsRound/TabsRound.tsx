import React, { useCallback, useState } from 'react';
import { TabProps, TabsRoundProps } from './TabsRound.types';
import propTypes from 'prop-types';
import s from './tabs-round.module.css';

export function TabsRound({
  tabsList,
  onChange,
  className,
  initialTab,
}: TabsRoundProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (!initialTab) return 0;
    const initialTabIndex = tabsList.indexOf(initialTab);
    return initialTabIndex === -1 ? 0 : initialTabIndex;
  });

  const handleTabChange = useCallback(
    (index: number) => {
      setActiveTab(index);
      onChange(tabsList[index]);
    },
    [tabsList, onChange, setActiveTab],
  );

  return (
    <div className={`${s.tabs} ${className || ''}`}>
      {tabsList.map((name, index) => (
        <Tab
          name={name}
          isActive={activeTab === index}
          onClick={() => handleTabChange(index)}
          key={`${name}-${index}`}
        />
      ))}
    </div>
  );
}

TabsRound.propTypes = {
  tabsList: propTypes.arrayOf(propTypes.string).isRequired,
  onChange: propTypes.func.isRequired,
  className: propTypes.string,
};

function Tab({ name, onClick, isActive }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`${s.tab} ${isActive ? s.active : ''}`}
    >
      {name}
    </button>
  );
}

Tab.propTypes = {
  name: propTypes.string,
  onClick: propTypes.func,
  isActive: propTypes.bool,
};
