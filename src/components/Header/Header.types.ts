export interface HeaderProps {
  loginMetamask: () => void;
  loginSafepal: () => void;
  loginWalletConnect: () => void;
  disconnect: () => void;
  account: string;
  balance: string;
  isSupportedChain: boolean;
  switchToAmb: () => void;
  connector: 'metamask' | 'walletconnect';
  disabled?: boolean;
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
