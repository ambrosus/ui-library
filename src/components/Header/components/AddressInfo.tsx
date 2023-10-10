import React, {useState} from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import { useRef } from 'react';
import styles from '../Header.module.css';

import { AddressInfoProps } from "../Header.types";

import circleCheck from '../assets/circle-check.svg';
import copyIcon from '../assets/copy.svg';
import logoutIcon from '../assets/logout.svg';

export default function AddressInfo({ address, logout, close, isOpen }: AddressInfoProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  const copy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  }

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
      <svg
        width={24}
        height={24}
        className={styles['address-info__check']}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={!copied ? {display: 'none'} : {}}
      >
        <path
          d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17Z"
          fill="#16C784"
        />
      </svg>
      <img
        src={copyIcon}
        width="20"
        height="20"
        onClick={copy}
        style={copied ? {display: 'none'} : {}}
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
