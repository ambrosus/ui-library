export interface ConnectWalletModalProps {
  close: () => void;
  loginMetamask?: () => void;
  loginWalletConnect?: () => void;
  isOpen: boolean;
}
