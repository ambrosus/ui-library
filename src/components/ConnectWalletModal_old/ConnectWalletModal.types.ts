export interface ConnectWalletModalProps {
  close: () => void;
  loginMetamask?: () => void;
  loginSafepal?: () => void;
  loginWalletConnect?: () => void;
  isOpen: boolean;
}
