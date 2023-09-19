import React from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import { useRef } from 'react';
import styles from '../Header.module.css';

import { AddressInfoProps } from "../Header.types";

import circleCheck from '../assets/circle-check.svg';
import copyIcon from '../assets/copy.svg';
import logoutIcon from '../assets/logout.svg';

export default function AddressInfo({ address, logout, close, isOpen }: AddressInfoProps) {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  return (
    <div className={styles['address-info']} ref={ref}>
      <p className={styles['address-info__label']}>Connected wallet</p>
      <div className={styles['address-info__block']}>
        <img
          src={circleCheck}
          width="16"
          height="16"
          className={styles['address-info__check']}
          alt="check"
        />
        <span className={styles['address-info__address']}>
          {`${address.substring(0, 5)}...${address.substring(
            address.length - 5,
            address.length
          )}`}
        </span>
      </div>
      <img
        src={copyIcon}
        width="20"
        height="20"
        className={styles['address-info__copy']}
        alt="copy"
      />
      <button className={styles['address-info__disconnect']} onClick={logout}>
        Disconnect wallet
        <img src={logoutIcon} width="20" height="20" alt="logout" />
      </button>
    </div>
  );
};
