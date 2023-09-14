import React, { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import styles from '../Header.module.css';
import {HeaderNavProps} from "../Header.types";

import caretIcon from '../assets/caret.svg';

export default function HeaderNav({ close, headerInfo, className, isOpen }: HeaderNavProps) {
  const [activeList, setActiveList] = useState('');

  const ref = useRef(null);

  useClickOutside(
    ref,
    () => {
      close();
      setActiveList('');
    },
    isOpen
  );

  // const handleList = (key: string) => {
  //   setActiveList((state) => (state === key ? '' : key));
  // };

  return (
    <div
      ref={ref}
      className={`${styles['nav-item-wrapper']} ${ className || ''}`}
    >
      <div className={styles['nav-item']} >
          <span
            className={styles['nav-item__label']}
          >
            label
            <img
              src={caretIcon}
              alt="caret"
              className={`${styles['nav-item__label-img']} ${
                false
                  ? styles['nav-item__label-img_active']
                  : ''
              }`}
            />
          </span>
        {/*{activeList === asText(el.primary.navlabel) && (*/}
        {/*  <div className={styles['nav-item__list']}>*/}
        {/*    {el.items.map((item) => (*/}
        {/*      <Link*/}
        {/*        href={asText(item.navitemurl)}*/}
        {/*        key={asText(item.navitemlabel)}*/}
        {/*        className={styles['nav-item__list-item']}*/}
        {/*      >*/}
        {/*        <img*/}
        {/*          src={item.navitemimg.url}*/}
        {/*          width="40"*/}
        {/*          height="40"*/}
        {/*          className={styles['nav-item__list-img']}*/}
        {/*          alt={asText(item.navitemlabel)}*/}
        {/*        />*/}
        {/*        <div>*/}
        {/*          <p className={styles['nav-item__list-title']}>*/}
        {/*            {asText(item.navitemlabel)}*/}
        {/*          </p>*/}
        {/*          <p className={styles['nav-item__list-descr']}>*/}
        {/*            {asText(item.navitemdescr)}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </Link>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      {/*{headerInfo.slices.map((el) => (*/}
      {/*  <div className={styles['nav-item']} key={asText(el.primary.navlabel)}>*/}
      {/*    <span*/}
      {/*      className={styles['nav-item__label']}*/}
      {/*      onClick={() => handleList(asText(el.primary.navlabel))}*/}
      {/*    >*/}
      {/*      {asText(el.primary.navlabel)}*/}
      {/*      <img*/}
      {/*        src="/caret.svg"*/}
      {/*        alt="caret"*/}
      {/*        className={`${styles['nav-item__label-img']} ${*/}
      {/*          activeList === asText(el.primary.navlabel)*/}
      {/*            ? styles['nav-item__label-img_active']*/}
      {/*            : ''*/}
      {/*        }`}*/}
      {/*      />*/}
      {/*    </span>*/}
      {/*    {activeList === asText(el.primary.navlabel) && (*/}
      {/*      <div className={styles['nav-item__list']}>*/}
      {/*        {el.items.map((item) => (*/}
      {/*          <Link*/}
      {/*            href={asText(item.navitemurl)}*/}
      {/*            key={asText(item.navitemlabel)}*/}
      {/*            className={styles['nav-item__list-item']}*/}
      {/*          >*/}
      {/*            <img*/}
      {/*              src={item.navitemimg.url}*/}
      {/*              width="40"*/}
      {/*              height="40"*/}
      {/*              className={styles['nav-item__list-img']}*/}
      {/*              alt={asText(item.navitemlabel)}*/}
      {/*            />*/}
      {/*            <div>*/}
      {/*              <p className={styles['nav-item__list-title']}>*/}
      {/*                {asText(item.navitemlabel)}*/}
      {/*              </p>*/}
      {/*              <p className={styles['nav-item__list-descr']}>*/}
      {/*                {asText(item.navitemdescr)}*/}
      {/*              </p>*/}
      {/*            </div>*/}
      {/*          </Link>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};
