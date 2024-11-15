import { Connector } from 'wagmi';
import { MockedConnector } from '../../utils';

export interface HeaderProps {
  disabled?: boolean;
  logotype?: LogoProps;
  chainId: number;
  balance?: string;
  isSupportedChain?: boolean;
  connectors?: Connector[];
  currentConnector?: Connector;
  disconnect?: () => void;
  switchToAmb?: () => void;
}

export interface HeaderBodyProps extends Omit<HeaderProps, 'chainId'> {
  // wallet managing related props below
  account: string | undefined;
  balance: string;
  isSupportedChain: boolean;
  connectors: Connector[];
  promoConnectors?: MockedConnector[];
  currentConnector?: Connector;
  disconnect: () => void;
  switchToAmb?: () => void;
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
