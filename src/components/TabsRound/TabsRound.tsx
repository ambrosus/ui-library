import React, {useEffect, useState} from "react";
import {TabProps, TabsRoundProps} from "./TabsRound.types";
import propTypes from "prop-types";
import s from "./tabs-round.module.css";

export function TabsRound ({ tabsList, onChange, className }: TabsRoundProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => onChange(tabsList[activeTab]), [activeTab])

  return (
    <div className={`${s.tabs} ${className || ''}`}>
      {
        tabsList.map((name, index) => (
          <Tab
            name={name}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
            key={`${name}-${index}`}
          />
        ))
      }
    </div>
  )
}

TabsRound.propTypes = {
  tabsList: propTypes.arrayOf(propTypes.string).isRequired,
  onChange: propTypes.func.isRequired,
  className: propTypes.string
}

function Tab({ name, onClick, isActive }: TabProps) {
  return (
    <button onClick={onClick} className={`${s.tab} ${isActive ? s.active : ''}`}>
      {name}
    </button>
  )
}

Tab.propTypes = {
  name: propTypes.string,
  onClick: propTypes.func,
  isActive: propTypes.bool
}
