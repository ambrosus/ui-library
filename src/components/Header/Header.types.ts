export interface HeaderProps {
  loginMetamask: () => void;
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
  address?: string;
  isOpen?: boolean;
  logout?: () => void;
  close?: () => void;
  balance: string;
}

export interface HeaderNavProps {
  className?: string;
  data?: [any];
}

export interface MobileMenuProps {
  close?: () => void;
  isOpen?: boolean;
  data?: { [key: string]: any };
  balance: any;
}
