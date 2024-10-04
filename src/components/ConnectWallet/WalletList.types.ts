import { Connector } from 'wagmi';

export interface WalletListProps {
  onClose: () => void;
  connectors: Connector[];
}
