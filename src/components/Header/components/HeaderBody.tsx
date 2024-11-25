import logo from '../assets/logo.svg';
import { HeaderBodyProps } from '../Header.types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSinglePrismicDocument } from '@prismicio/react';
import useLockBodyScroll from '../../../hooks/useBodyScroll';
import s from '../Header.module.css';
import HeaderNav from './HeaderNav';
import { Button } from '../../Button';
import TailArrow from '../../Icons/TailArrow';
import pocketIcon from '../assets/pocket.svg';
import ArrowTop from '../../Icons/ArrowTop';
import cross from '../assets/cross.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import { AddressInfo } from '../../AddressInfo';
import { ConnectWalletModal } from '../../ConnectWalletModal';
import { CONNECTOR_ICONS } from '../../../utils';

export function HeaderBody({
  disconnect,
  account,
  balance,
  connectors,
  promoConnectors,
  currentConnector,
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
}: HeaderBodyProps) {
  const [isNavOpen, setIsNavOpen] = useState(true);
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
      setIsLoginModalOpen(false);
    }
  }, [account]);

  useLockBodyScroll(isMobileNavOpen);

  const handleLogout = () => {
    disconnect();
    setIsAddressInfoOpen(false);
    setIsLoginModalOpen(false);
  };

  const handleLoginModal = () => setIsLoginModalOpen((state) => !state);
  const handleAddressInfo = () => setIsAddressInfoOpen((state) => !state);
  const handleMobileNav = () => setIsMobileNavOpen((state) => !state);
  const handleNav = () => setIsNavOpen((state) => !state);

  if (!header) return null;

  return (
    <>
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
              <Button type='tetiary' size='medium' tailIcon={<TailArrow />}>
                Get AMB
              </Button>
            </a>

            {!account && (
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
                <span className={s['connect-wallet-text']}>Connect wallet</span>
              </Button>
            )}

            {account && !isSupportedChain && (
              <Button onClick={switchToAmb} size='medium' type='secondary'>
                Switch to AMB-NET
              </Button>
            )}

            {account && currentConnector && isSupportedChain && (
              <div
                ref={accountInfoRef}
                className={s.header__address}
                onClick={handleAddressInfo}
              >
                <img
                  src={
                    currentConnector.name
                      ? CONNECTOR_ICONS[currentConnector.name]
                      : ''
                  }
                  alt={currentConnector.name + 'icon'}
                  className={s['header__address-icon']}
                />
                <span className={s['header__address-text']}>
                  {`${account.substring(0, 5)}...${account.substring(
                    account.length - 5,
                    account.length,
                  )}`}
                </span>
                <ArrowTop
                  className={`${s['header__address-arrow']} ${
                    isAddressInfoOpen ? '' : s['open']
                  }`}
                />
              </div>
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
              address={account}
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
        </div>
      </header>

      {isLoginModalOpen && (
        <ConnectWalletModal
          isOpen={isLoginModalOpen}
          onClose={handleLoginModal}
          connectors={connectors}
          promoConnectors={promoConnectors}
        />
      )}
    </>
  );
}
