import React from 'react';

import styles from '../Header.module.css';
import {HeaderNavProps} from "../Header.types";
import {PrismicText} from "@prismicio/react";
import {asText} from "@prismicio/client";


export default function HeaderNav({ className, data }: HeaderNavProps) {
  const isActive = (productName, a) => {
    return window.location.pathname.includes(productName.toLowerCase());
  }
  return (
    <div
      className={`${styles['nav-item-wrapper']} ${ className || ''}`}
    >
      {data && data.map((product) => (
        <a href={product.url} className={`${styles['nav-item']} ${isActive(asText(product.name)) ? styles['nav-item_active'] : ''}`}>
          <PrismicText field={product.name} />
        </a>
      ))}
    </div>
  );
};
