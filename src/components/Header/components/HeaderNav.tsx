import React from 'react';

import styles from '../Header.module.css';
import {HeaderNavProps} from "../Header.types";
import {PrismicLink, PrismicText} from "@prismicio/react";


export default function HeaderNav({ className, data }: HeaderNavProps) {

  return (
    <div
      className={`${styles['nav-item-wrapper']} ${ className || ''}`}
    >
      {data && data.map((product) => (
        <PrismicLink field={product.url} className={styles['nav-item']}>
          <PrismicText field={product.name} />
        </PrismicLink>
      ))}
    </div>
  );
};
