import React from "react";
import s from './badge.module.css';
import PropTypes from "prop-types";
import BadgeProps from "./Badge.types";

export function Badge({ leadIcon, children, tailIcon, size, type, className }: BadgeProps) {
  const classNames = [
    s.badge,
    s[size],
    s[type],
    ...(className ? [className] : []),
  ];

  return (
    <span className={classNames.join(' ')}>
      {leadIcon || null}
      {children}
      {tailIcon || null}
    </span>
  )
}

Badge.propTypes = {
  leadIcon: PropTypes.node,
  tailIcon: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  type: PropTypes.oneOf(['neutral', 'destructive', 'warning', 'success', 'white']).isRequired,
  className: PropTypes.string,
};
