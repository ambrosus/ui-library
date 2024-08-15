export interface HeaderProps {
  loginMetamask: () => void;
  loginSafepal: () => void;
  loginBitget: () => void;
  loginWalletConnect: () => void;
  disconnect: () => void;
  account: string;
  balance: string;
  isSupportedChain: boolean;
  switchToAmb: () => void;
  connector: 'metamask' | 'walletconnect';
  disabled?: boolean;
  logotype?: LogoProps;
}

export interface LogoProps {
  src: string;
  href?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export interface AddressInfoProps {
  accountInfoRef: any;
  address?: string;
  isOpen?: boolean;
  logout?: () => void;
  close?: () => void;
  balance: string;
}

export interface HeaderNavProps {
  hamburgerButtonRef: any;
  headerInfo: any;
  isOpen: boolean;
  close: () => void;
  className?: string;
}

export interface MobileMenuProps {
  close: () => void;
  isOpen: boolean;
  balance: string;
  data?: { [key: string]: any };
}
