import WALLETCONNECT_ICON from './icons/walletconnect-icon.svg';
import METAMASK_ICON from './icons/metamask-icon.svg';
import SAFEPAL_ICON from './icons/safepal-icon.svg';
import BITGET_ICON from './icons/bitget-icon.svg';
import GATEWALLET_ICON from './icons/gateweb3-icon.svg';
import { CONNECTOR_NAME } from './names';

export const CONNECTOR_ICONS: { [key: string]: string } = {
  [CONNECTOR_NAME.WalletConnect]: WALLETCONNECT_ICON,
  [CONNECTOR_NAME.MetaMask]: METAMASK_ICON,
  [CONNECTOR_NAME.SafePal]: SAFEPAL_ICON,
  [CONNECTOR_NAME.Bitget]: BITGET_ICON,
  [CONNECTOR_NAME.GateWallet]: GATEWALLET_ICON,
};
