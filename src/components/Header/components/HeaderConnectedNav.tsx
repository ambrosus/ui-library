import React, { useRef } from 'react';

import useClickOutside from '../hooks/useClickOutside';
import styles from '../Header.module.css';
import {HeaderConnectedNavProps} from "../Header.types";

import airdaoIcon from '../assets/airdao.svg';

export default function HeaderConnectedNav({ close, headerInfo, isOpen }: HeaderConnectedNavProps){
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  return (
    <div ref={ref} className={styles['connected-nav']}>
      <div className={styles['connected-nav__balance']}>
        <img
          src={airdaoIcon}
          width="30"
          height="30"
          className={styles['connected-nav__balance-img']}
          alt="balance"
        />
        <span>0.00 AMB</span>
      </div>
      <div
        className={`${styles['connected-nav__hr']} ${styles['connected-nav__hr_balance']}`}
      />
      <div className={styles['connected-nav__products']}>
        _products_
        {/*{headerInfo.products.map((el) => (*/}
        {/*  <a*/}
        {/*    key={asText(el.productname)}*/}
        {/*    className={styles['connected-nav__product']}*/}
        {/*  >*/}
        {/*    {asText(el.productname)}*/}
        {/*  </a>*/}
        {/*))}*/}
      </div>
      <span className={styles['connected-nav__title']}>About</span>
      _about_
      {/*{findSlice('About').map((el) => (*/}
      {/*  <a*/}
      {/*    className={styles['connected-nav__link']}*/}
      {/*    key={asText(el.navitemlabel)}*/}
      {/*  >*/}
      {/*    {asText(el.navitemlabel)}*/}
      {/*  </a>*/}
      {/*))}*/}
      <span className={styles['connected-nav__title']}>Learn</span>
      _learn_
      {/*{findSlice('Learn').map((el) => (*/}
      {/*  <a*/}
      {/*    className={styles['connected-nav__link']}*/}
      {/*    key={asText(el.navitemlabel)}*/}
      {/*  >*/}
      {/*    {asText(el.navitemlabel)}*/}
      {/*  </a>*/}
      {/*))}*/}
      <div className={styles['connected-nav__hr']} />
      <span className={styles['connected-nav__title']}>Community</span>
      <div className={styles['connected-nav__community']}>
        _community_
        {/*{findSlice('Community').map((el) => (*/}
        {/*  <a*/}
        {/*    key={asText(el.navitemlabel)}*/}
        {/*    className={styles['connected-nav__community-item']}*/}
        {/*  >*/}
        {/*    <img src={el.navitemimg.url} alt={asText(el.navitemlabel)} />*/}
        {/*  </a>*/}
        {/*))}*/}
      </div>
    </div>
  );
};
