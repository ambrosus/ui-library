import React, { useState } from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import { useRef } from 'react';
import styles from '../Header.module.css';

import { AddressInfoProps } from '../Header.types';

import airdaoIcon from '../assets/airdao.svg';
// import circleCheck from '../assets/circle-check.svg';
import copyIcon from '../assets/copy.svg';
import logoutIcon from '../assets/logout.svg';

export default function AddressInfo({
  address = '',
  balance,
  logout,
  close = () => {},
  isOpen = false,
}: AddressInfoProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  const copy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles['address-info']} ref={ref}>
      <div className={styles['address-info__block-wrapper']}>
        <div className={styles['address-info__block']}>
          <span className={styles['address-info__address']}>
            {address &&
              `${address.substring(0, 5)}...${address.substring(
                address.length - 5,
                address.length,
              )}`}
          </span>
          <span
            style={!copied ? { display: 'none' } : {}}
            className={styles['address-info__copied']}
          >
            Address copied!
          </span>
          <img
            src={copyIcon}
            width='20'
            height='20'
            onClick={copy}
            style={copied ? { display: 'none' } : {}}
            className={styles['address-info__copy']}
            alt='copy'
          />
        </div>
      </div>
      <div className={styles.balance}>
        <img
          src={airdaoIcon}
          width='20'
          height='20'
          className={styles.balance__img}
          alt='airdao-icon'
        />
        <span>{balance} AMB</span>
      </div>
      <hr />
      <button className={styles['address-info__disconnect']} onClick={logout}>
        <img src={logoutIcon} width='20' height='20' alt='logout' />
        Disconnect wallet
      </button>
    </div>
  );
}
