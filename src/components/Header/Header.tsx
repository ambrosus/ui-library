import React, { useEffect, useMemo, useRef, useState } from 'react';

import HeaderNav from './components/HeaderNav';

import { AddressInfo } from '../AddressInfo';
import s from './Header.module.css';

import logo from './assets/logo.svg';
import hamburgerIcon from './assets/hamburger.svg';
import cross from './assets/cross.svg';
import pocketIcon from './assets/pocket.svg';
import { Button } from '../Button';
import { HeaderProps } from './Header.types';
import { ConnectWalletModal } from '../ConnectWalletModal';
import { PrismicProvider, useSinglePrismicDocument } from '@prismicio/react';

import { client } from './prismic';
import propTypes from 'prop-types';
import TailArrow from '../Icons/TailArrow';
import ArrowTop from '../Icons/ArrowTop';
import WalletConnectIcon from '../Icons/WalletConnectIcon';
import MetaMaskIcon from '../Icons/MetaMaskIcon';
import bitgetIcon from '../ConnectWallet/assets/bitget.png';
import useLockBodyScroll from '../../hooks/useBodyScroll';

function HeaderBody({
  disconnect,
  account,
  balance,
  connectors,
  isSupportedChain,
  switchToAmb,
  disabled = false,
  logotype = {
    src: logo,
    href: 'https://airdao.io/',
    width: 'auto',
    height: 'auto',
    className: undefined,
  },
}: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [address, setAddress] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAddressInfoOpen, setIsAddressInfoOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const accountInfoRef = useRef(null);
  const headerRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  const [document] = useSinglePrismicDocument('header');
  const header = useMemo(() => document?.data || null, [document]);

  useEffect(() => {
    if (!header) return;
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
  }, [header]);

  useEffect(() => {
    if (account) {
      setAddress(account);
      setIsLoginModalOpen(false);
    }
  }, [account]);

  useLockBodyScroll(isMobileNavOpen);

  const handleLogout = () => {
    disconnect();
    setAddress('');
    setIsAddressInfoOpen(false);
    setIsLoginModalOpen(false);
  };

  const handleLoginModal = () => setIsLoginModalOpen((state) => !state);
  const handleAddressInfo = () => setIsAddressInfoOpen((state) => !state);
  const handleMobileNav = () => setIsMobileNavOpen((state) => !state);
  const handleNav = () => setIsNavOpen((state) => !state);

  if (!header) return null;

  let connectorIcon = <WalletConnectIcon />;

  if (connector?.provider?.isBitKeep) {
    connectorIcon = <img src={bitgetIcon} alt="bitget" className={s["header__bitget"]}/>
  } else if (connector?.provider?.isMetaMask) {
    connectorIcon = <MetaMaskIcon />
  }

  return (
    <>
      {isLoginModalOpen && <div className={s['blur-overlay']} />}
      <header
        className={`${s.header} ${isFixed ? s.header_fixed : ''}`}
        ref={headerRef}
      >
        <div className={s['header-container']}>
          <a
            href={logotype.href || 'https://airdao.io/'}
            className={
              logotype.className
                ? `${logotype.className} ${s.header__logo}`
                : s.header__logo
            }
          >
            <img
              src={logotype.src}
              width={logotype.width || 'auto'}
              height={logotype.height || 'auto'}
              alt='logo'
            />
          </a>
          {address ? (
            <>
              <HeaderNav
                hamburgerButtonRef={hamburgerButtonRef}
                close={handleNav}
                headerInfo={header}
                className='nav-item-wrapper_desktop'
                isOpen={isNavOpen}
              />
              <div className={s['header__buttons']}>
                <a
                  href={header?.amburl.url}
                  className={s['header__button-tetiary']}
                >
                  <Button type='tetiary' size='medium'>
                    <span>Get AMB</span>
                    <TailArrow />
                  </Button>
                </a>
                {isSupportedChain ? (
                  <div
                    ref={accountInfoRef}
                    className={s.header__address}
                    onClick={handleAddressInfo}
                  >
                    {connectorIcon}
                    <span className={s['header__address-text']}>
                      {`${address.substring(0, 5)}...${address.substring(
                        address.length - 5,
                        address.length,
                      )}`}
                    </span>
                    <ArrowTop
                      className={`${s['header__address-arrow']} ${
                        isAddressInfoOpen ? '' : s['open']
                      }`}
                    />
                  </div>
                ) : (
                  <Button onClick={switchToAmb} size='medium' type='secondary'>
                    Switch to AMB-NET
                  </Button>
                )}
                <button
                  ref={hamburgerButtonRef}
                  onClick={handleMobileNav}
                  className={s['hamburger-btn']}
                >
                  <img
                    src={isMobileNavOpen ? cross : hamburgerIcon}
                    width='24'
                    height='24'
                    alt='menu'
                  />
                </button>
              </div>

              {isAddressInfoOpen && (
                <AddressInfo
                  accountInfoRef={accountInfoRef}
                  isOpen={isAddressInfoOpen}
                  balance={balance}
                  logout={handleLogout}
                  address={address}
                  close={handleAddressInfo}
                />
              )}

              {isMobileNavOpen && (
                <HeaderNav
                  hamburgerButtonRef={hamburgerButtonRef}
                  isOpen={isMobileNavOpen}
                  close={handleMobileNav}
                  headerInfo={header}
                  className='nav-item-wrapper_not-desktop'
                />
              )}
            </>
          ) : (
            <>
              <HeaderNav
                hamburgerButtonRef={hamburgerButtonRef}
                close={handleNav}
                headerInfo={header}
                className='nav-item-wrapper_desktop'
                isOpen={isNavOpen}
              />

              <div className={s['header__buttons']}>
                <a
                  href={header?.amburl.url}
                  className={s['header__button-tetiary']}
                >
                  <Button type='tetiary' size='medium'>
                    <span>Get AMB</span>
                    <TailArrow />
                  </Button>
                </a>
                <Button
                  size='medium'
                  type='secondary'
                  onClick={handleLoginModal}
                  className={s.connect_button}
                  disabled={disabled}
                >
                  <img
                    src={pocketIcon}
                    height='20'
                    width='20'
                    alt='connect wallet'
                    className={s['connect-wallet-img']}
                  />
                  <span className={s['connect-wallet-text']}>
                    Connect wallet
                  </span>
                </Button>

                <button
                  ref={hamburgerButtonRef}
                  onClick={handleMobileNav}
                  className={s['hamburger-btn']}
                >
                  <img
                    src={isMobileNavOpen ? cross : hamburgerIcon}
                    width='24'
                    height='24'
                    alt='menu'
                  />
                </button>
              </div>

              {isMobileNavOpen && (
                <HeaderNav
                  hamburgerButtonRef={hamburgerButtonRef}
                  isOpen={isMobileNavOpen}
                  close={handleMobileNav}
                  headerInfo={header}
                  className='nav-item-wrapper_not-desktop'
                />
              )}
            </>
          )}
        </div>
      </header>

      {isLoginModalOpen && (
        <ConnectWalletModal
          isOpen={isLoginModalOpen}
          close={handleLoginModal}
          connectors={connectors}
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
