import React, { useEffect, useRef, useState } from 'react';

import HeaderNav from './components/HeaderNav';

import AddressInfo from './components/AddressInfo';
import s from './Header.module.css';

import logo from './assets/logo.svg';
import airdaoIcon from './assets/airdao.svg';
import metamaskIcon from './assets/metamask.svg';
import hamburgerIcon from './assets/hamburger.svg';
import pocketIcon from './assets/pocket.svg';
import {Button} from "../Button";
import {HeaderProps} from "./Header.types";
import {ConnectWalletModal} from "../ConnectWalletModal/ConnectWalletModal";
import {MobileMenu} from "./components/MobileMenu";
import {PrismicProvider} from "@prismicio/react";

import {client} from "./prismic";
import {usePrismicData} from "./usePrismicData";

function HeaderBody({ disconnect, account, loginMetamask, loginWalletConnect }: HeaderProps) {
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
        <img
          src={logo}
          width="160"
          height="34"
          className={s.header__logo}
          alt="logo"
        />

        <HeaderNav
          className={s["nav-item-wrapper_desktop"]}
          data={data.products}
        />

        {address ? (
          <>
            <div className={s.balance}>
              <img
                src={airdaoIcon}
                width="30"
                height="30"
                className={s.balance__img}
                alt="airdao-icon"
              />
              <span className={s.balance__amount}>0.00 AMB</span>
            </div>
            <div className={s.header__address} onClick={handleAddressInfo}>
              <img
                src={metamaskIcon}
                width="20"
                height="20"
                alt="metamask"
              />
              <span className={s['header__address-text']}>
                {`${address.substring(0, 5)}...${address.substring(
                  address.length - 5,
                  address.length
                )}`}
              </span>
            </div>
          </>
        ) : (
          <>
            <Button size="medium" type='secondary' onClick={handleLoginModal} className={s.connect_button}>
              <img
                src={pocketIcon}
                height="20"
                width="20"
                alt="connect wallet"
                className={s['connect-wallet-img']}
              />
              <span className={s['connect-wallet-text']}>
                Connect wallet
              </span>
            </Button>
          </>
        )}

        <button
          onClick={handleMobileNav}
          className={s['hamburger-btn']}
        >
          <img src={hamburgerIcon} width="24" height="24" alt="menu" />
        </button>

        {isAddressInfoOpen && (
          <AddressInfo
            isOpen={isAddressInfoOpen}
            logout={handleLogout}
            address={address}
            close={handleAddressInfo}
          />
        )}

        {isMobileNavOpen && (
          <MobileMenu close={handleMobileNav} isOpen={isMobileNavOpen} data={data} />
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
