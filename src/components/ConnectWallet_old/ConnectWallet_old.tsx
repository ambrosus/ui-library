import React from 'react';
import s from './connect-wallet.module.css';
import { ConnectWalletProps } from './ConnectWallet.types';

import airdaoIcon from './assets/airdao-icon.svg';
import metamaskIcon from './assets/metamask.svg';
import safepal from './assets/safepal.svg';
import walletConnectIcon from './assets/wallet-connect.svg';
import arrowIcon from './assets/arrow.svg';
import PropTypes from 'prop-types';

export function ConnectWallet_old({
  loginMetamask,
  loginWalletConnect,
  loginSafepal,
  loginBitget,
}: ConnectWalletProps) {
  return (
    <div className={s['login-modal']}>
      <img src={airdaoIcon} width='65' height='65' alt='login' />
      <p className={s['login-modal__subtitle']}>
        Connect a wallet to use AirDAO
      </p>
      <button className={s['login-modal__btn']} onClick={loginMetamask}>
        <img
          src={metamaskIcon}
          width='28'
          height='25'
          className={s['login-modal__img']}
          alt='metamask'
        />
        <div className={s['login-modal__block']}>
          <p className={s['login-modal__title']}>MetaMask</p>
          <p className={s['login-modal__text']}>
            Connect using your browser wallet
          </p>
        </div>
        <img
          src={arrowIcon}
          width='16'
          height='16'
          className={s['login-modal__arrow']}
          alt='arrow'
        />
      </button>
      <button
        className={s['login-modal__btn']}
        style={{ marginTop: 16 }}
        onClick={loginSafepal}
      >
        <img
          src={safepal}
          width='28'
          height='25'
          className={s['login-modal__img']}
          alt='metamask'
        />
        <div className={s['login-modal__block']}>
          <p className={s['login-modal__title']}>SafePal</p>
          <p className={s['login-modal__text']}>
            Connect using your SafePal wallet
          </p>
        </div>
        <img
          src={arrowIcon}
          width='16'
          height='16'
          className={s['login-modal__arrow']}
          alt='arrow'
        />
      </button>
      <button
        className={s['login-modal__btn']}
        style={{ marginTop: 16 }}
        onClick={loginBitget}
      >
        <img
          // src={bitget}
          src={metamaskIcon}
          width='28'
          height='25'
          className={s['login-modal__img']}
          alt='bitget'
        />
        <div className={s['login-modal__block']}>
          <p className={s['login-modal__title']}>Bitget Wallet</p>
          <p className={s['login-modal__text']}>
            Connect using your Bitget wallet
          </p>
        </div>
        <img
          src={arrowIcon}
          width='16'
          height='16'
          className={s['login-modal__arrow']}
          alt='arrow'
        />
      </button>
      <button className={s['login-modal__btn']} onClick={loginWalletConnect}>
        <img
          src={walletConnectIcon}
          width='28'
          height='16'
          className={s['login-modal__img']}
          alt='wallet connect'
        />
        <div className={s['login-modal__block']}>
          <p className={s['login-modal__title']}>WalletConnect</p>
          <p className={s['login-modal__text']}>Connect using WalletConnect</p>
        </div>
        <img
          src={arrowIcon}
          width='16'
          height='16'
          className={s['login-modal__arrow']}
          alt='arrow'
        />
      </button>
    </div>
  );
}

ConnectWallet_old.propTypes = {
  loginMetamask: PropTypes.func,
  loginWalletConnect: PropTypes.func,
};
