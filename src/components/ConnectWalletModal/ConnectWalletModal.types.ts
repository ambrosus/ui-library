export interface ConnectWalletModalProps {
  close: () => void;
  loginMetamask?: () => void;
  loginSafepal?: () => void;
  loginBitget?: () => void;
  loginWalletConnect?: () => void;
  isOpen: boolean;
}
