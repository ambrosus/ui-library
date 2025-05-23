import { Connector } from 'wagmi';
import { MockedConnector } from '../../utils';

export interface WalletListProps {
  onClose: () => void;
  connectors: Connector[];
  promoConnectors?: MockedConnector[];
  chainIdToConnect?: number;
}
