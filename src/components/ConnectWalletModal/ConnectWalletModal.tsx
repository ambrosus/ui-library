
import React from "react";
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';
import s from './connect-wallet-modal.module.css';
import { Modal } from "../Modal";
import {ConnectWalletModalProps} from "./ConnectWalletModal.types";

import airdaoIcon from './assets/airdao-icon.svg';
import metamaskIcon from './assets/metamask.svg';
import walletConnectIcon from './assets/wallet-connect.svg';
import arrowIcon from './assets/arrow.svg';

export function ConnectWalletModal ({
  close,
  loginMetamask,
  loginWalletConnect,
  isOpen,
}: ConnectWalletModalProps) {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  return (
    <Modal close={close} ref={ref}>
      <div className={s['login-modal']}>
        <img src={airdaoIcon} width="65" height="65" alt="login" />
        <p className={s['login-modal__subtitle']}>
          Connect a wallet to use AirDAO
        </p>
        <button
          className={s['login-modal__btn']}
          onClick={loginMetamask}
        >
          <img
            src={metamaskIcon}
            width="28"
            height="25"
            className={s['login-modal__img']}
            alt="metamask"
          />
          <div className={s['login-modal__block']}>
            <p className={s['login-modal__title']}>MetaMask</p>
            <p className={s['login-modal__text']}>
              Connect using your browser wallet
            </p>
          </div>
          <img
            src={arrowIcon}
            width="16"
            height="16"
            className={s['login-modal__arrow']}
            alt="arrow"
          />
        </button>
        <button
          className={s['login-modal__btn']}
          onClick={loginWalletConnect}
        >
          <img
            src={walletConnectIcon}
            width="28"
            height="16"
            className={s['login-modal__img']}
            alt="wallet connect"
          />
          <div className={s['login-modal__block']}>
            <p className={s['login-modal__title']}>WalletConnect</p>
            <p className={s['login-modal__text']}>
              Connect using WalletConnect
            </p>
          </div>
          <img
            src={arrowIcon}
            width="16"
            height="16"
            className={s['login-modal__arrow']}
            alt="arrow"
          />
        </button>
      </div>
    </Modal>
  );
}
