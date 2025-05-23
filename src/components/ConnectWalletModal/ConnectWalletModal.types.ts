import { Connector } from 'wagmi';
import { MockedConnector } from '../../utils';

export interface ConnectWalletModalTypes {
  onClose: () => void;
  isOpen?: boolean;
  connectors: Connector[];
  promoConnectors?: MockedConnector[];
  chainIdToConnect?: number;
}
