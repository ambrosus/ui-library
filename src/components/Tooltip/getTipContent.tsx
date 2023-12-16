import React from 'react';

const TipContent = (tip: string, multiline?: boolean | string) => {
  const regexp = /<br\s*\/?>/;

  if (!multiline || multiline === 'false' || !regexp.test(tip)) {
    return tip;
  }

  // Multiline tooltip content
  return tip.split(regexp).map((d, i) => {
    return (
      <span key={i} className="multi-line">
        {d}
      </span>
    );
  });
};

export default TipContent;
