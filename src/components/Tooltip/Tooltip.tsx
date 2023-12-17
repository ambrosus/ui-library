import React, { MouseEvent, useState, useRef } from 'react';

import getPosition from './getPosition';
import getTipContent from './getTipContent';

import styles from './tooltip.module.css';

type TooltipProps = {
  position?: string;
  message: string;
  isMultiline?: boolean;
};

export function Tooltip({
  position = 'top',
  message = '',
  isMultiline = false,
  children,
}: React.PropsWithChildren<TooltipProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const tooltip = useRef<HTMLDivElement>(null);

  const showTooltip = (e: MouseEvent<HTMLDivElement>) => {
    if (!node.current) return;

    const result = getPosition(
      e.currentTarget,
      tooltip.current,
      'top',
      'top',
      {}
    );
    tooltip.current!.style.left = result.position!.left + 'px';
    tooltip.current!.style.top = result.position!.top + 'px';
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const classNames = `${styles.message} ${isVisible ? styles.show : ''} ${
    styles['place_' + position]
  }`;
  const content = getTipContent(message, isMultiline);

  return (
    <div className={styles.tooltip}>
      <div
        className={styles.toggler}
        onMouseOverCapture={showTooltip}
        onMouseOut={hideTooltip}
        ref={node}
      >
        {children}
      </div>
      <div className={classNames} ref={tooltip}>
        {content}
      </div>
    </div>
  );
}
