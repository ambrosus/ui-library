export interface HeaderProps {
  loginMetamask: () => void;
  loginWalletConnect: () => void;
  disconnect: () => void;
  account: string;
  balance: string;
}

export interface AddressInfoProps {
  address?: string;
  isOpen?: boolean;
  logout?: () => void;
  close?: () => void;
}

export interface HeaderNavProps {
  className?: string;
  data?: [any]
}

export interface MobileMenuProps {
  close?: () => void;
  isOpen?: boolean;
  data?: { [key: string]: any };
  balance: any
}
