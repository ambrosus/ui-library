import { Connector } from 'wagmi';

export interface ConnectWalletModalTypes {
  onClose: () => void;
  isOpen?: boolean;
  connectors: Connector[];
}
