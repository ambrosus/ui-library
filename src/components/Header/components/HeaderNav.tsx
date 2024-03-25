import React from 'react';

import styles from '../Header.module.css';
import { HeaderNavProps } from '../Header.types';
import { PrismicText } from '@prismicio/react';
import { asText } from '@prismicio/client';

export default function HeaderNav({ className, data }: HeaderNavProps) {
  const isActive = (productName: string) => {
    return window.location.pathname
      .replace(/\/+/g, '')
      .includes(productName.toLowerCase().replace(/\s+/g, '-'));
  };

  return (
    <div className={`${styles['nav-item-wrapper']} ${className || ''}`}>
      {data &&
        data.map((product, i) => {
          return (
            <a
              href={product.url}
              className={`${styles['nav-item']} ${
                isActive(asText(product.name)) ? styles['nav-item_active'] : ''
              }`}
              key={product.name + i}
            >
              <PrismicText field={product.name} />
            </a>
          );
        })}
    </div>
  );
}
