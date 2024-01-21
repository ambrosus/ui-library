import React, { useEffect, useRef, useState } from 'react';

import HeaderNav from './components/HeaderNav';

import AddressInfo from './components/AddressInfo';
import s from './Header.module.css';

import logo from './assets/logo.svg';
import metamaskIcon from './assets/metamask.svg';
import hamburgerIcon from './assets/hamburger.svg';
import cross from './assets/cross.svg';
import pocketIcon from './assets/pocket.svg';
import { Button } from '../Button';
import { HeaderProps } from './Header.types';
import { ConnectWalletModal } from '../ConnectWalletModal/ConnectWalletModal';
import { MobileMenu } from './components/MobileMenu';
import { PrismicProvider } from '@prismicio/react';

import { client } from './prismic';
import { usePrismicData } from './usePrismicData';
import propTypes from 'prop-types';
import TailArrow from '../Icons/TailArrow';
import ArrowTop from '../Icons/ArrowTop';

function HeaderBody({
  disconnect,
  account,
  balance,
  loginMetamask,
  loginWalletConnect,
}: HeaderProps) {
  const [address, setAddress] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAddressInfoOpen, setIsAddressInfoOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const headerRef = useRef(null);

  const data = usePrismicData();

  useEffect(() => {
    // @ts-ignore
    const headerOffsetTop = headerRef.current.offsetTop;

    const handleFixed = () => {
      if (window.scrollY >= headerOffsetTop - 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    handleFixed();

    window.addEventListener('scroll', handleFixed);
    return () => window.removeEventListener('scroll', handleFixed);
  }, []);

  useEffect(() => {
    if (account) {
      setAddress(account);
      setIsLoginModalOpen(false);
    }
  }, [account]);

  useEffect(() => {
    if (window.innerWidth < 610) {
      const body = document.querySelector('body');

      if (body) {
        body.style.overflow = isMobileNavOpen ? 'hidden' : 'auto';
      }
    }
  }, [isMobileNavOpen]);

  const handleLogout = () => {
    disconnect();
    setAddress('');
    setIsAddressInfoOpen(false);
    setIsLoginModalOpen(false);
  };

  const handleLoginModal = () => setIsLoginModalOpen((state) => !state);
  const handleAddressInfo = () => setIsAddressInfoOpen((state) => !state);
  const handleMobileNav = () => setIsMobileNavOpen((state) => !state);

  return (
    <>
      {isLoginModalOpen && <div className={s['blur-overlay']} />}
      <header
        className={`${s.header} ${isFixed ? s.header_fixed : ''}`}
        ref={headerRef}
      >
        <a href="https://airdao.io/" className={s.header__logo}>
          <img src={logo} width="160" height="34" alt="logo" />
        </a>

        <HeaderNav
          className={s['nav-item-wrapper_desktop']}
          data={data.products}
        />

        {address ? (
          <>
            <div className={s['header__buttons']}>
              <a href={data.amburl} className={s['header__button-tetiary']}>
                <Button type="tetiary" size="medium">
                  <span>Get AMB</span>
                  <TailArrow />
                </Button>
              </a>
            </div>
            <div className={s.header__address} onClick={handleAddressInfo}>
              <img src={metamaskIcon} width="20" height="20" alt="metamask" />
              <span className={s['header__address-text']}>
                {`${address.substring(0, 5)}...${address.substring(
                  address.length - 5,
                  address.length
                )}`}
              </span>
              <ArrowTop
                className={`${s['header__address-arrow']} ${
                  isAddressInfoOpen ? '' : s['open']
                }`}
              />
            </div>
          </>
        ) : (
          <>
            <div className={s['header__buttons']}>
              <a href={data.amburl} className={s['header__button-tetiary']}>
                <Button type="tetiary" size="medium">
                  <span>Get AMB</span>
                  <TailArrow />
                </Button>
              </a>
              <Button
                size="medium"
                type="secondary"
                onClick={handleLoginModal}
                className={s.connect_button}
              >
                <img
                  src={pocketIcon}
                  height="20"
                  width="20"
                  alt="connect wallet"
                  className={s['connect-wallet-img']}
                />
                <span className={s['connect-wallet-text']}>Connect wallet</span>
              </Button>
            </div>
          </>
        )}

        <button onClick={handleMobileNav} className={s['hamburger-btn']}>
          <img
            src={isMobileNavOpen ? cross : hamburgerIcon}
            width="24"
            height="24"
            alt="menu"
          />
        </button>

        {isAddressInfoOpen && (
          <AddressInfo
            isOpen={isAddressInfoOpen}
            balance={balance}
            logout={handleLogout}
            address={address}
            close={handleAddressInfo}
          />
        )}

        {isMobileNavOpen && (
          <MobileMenu
            close={handleMobileNav}
            isOpen={isMobileNavOpen}
            data={data}
            balance={balance}
          />
        )}
      </header>

      {isLoginModalOpen && (
        <ConnectWalletModal
          isOpen={isLoginModalOpen}
          close={handleLoginModal}
          loginMetamask={loginMetamask}
          loginWalletConnect={loginWalletConnect}
        />
      )}
    </>
  );
}

export function Header(props: HeaderProps) {
  return (
    <PrismicProvider client={client}>
      <HeaderBody {...props} />
    </PrismicProvider>
  );
}

Header.propTypes = {
  loginMetamask: propTypes.func.isRequired,
  loginWalletConnect: propTypes.func.isRequired,
  disconnect: propTypes.func.isRequired,
  account: propTypes.string.isRequired,
  balance: propTypes.string.isRequired,
};
