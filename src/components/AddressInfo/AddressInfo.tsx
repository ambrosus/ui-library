import React, { useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRef } from 'react';
import styles from '../Header/Header.module.css';

import { AddressInfoProps } from '../Header/Header.types';

import airdaoIcon from '../Header/assets/airdao.svg';
import copyIcon from '../Header/assets/copy.svg';
import logoutIcon from '../Header/assets/logout.svg';

export function AddressInfo({
  accountInfoRef,
  address = '',
  balance,
  logout,
  close = () => {},
  isOpen = false,
}: AddressInfoProps) {
  const [copied, setCopied] = useState(false);

  const ref = useRef(null);

  const clickOutsideHandler = () => {
    if (!isOpen) return;
    close();
  };

  useOnClickOutside([ref, accountInfoRef], clickOutsideHandler);

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
      <div className={styles['header__balance']}>
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
