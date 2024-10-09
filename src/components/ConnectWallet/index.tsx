import React from 'react';
import { Connector, useAccount, useConnect } from 'wagmi';
import { WalletListProps } from './WalletList.types';
import styles from './connect-wallet.module.css';
import Airdao from './assets/airdao.svg';
import ArrowRightIcon from './assets/arrow-right.svg';

import { CONNECTOR_NAME } from '../../constants';
import METAMASK_ICON from './assets/metamask-icon.svg';
import SAFEPAL_ICON from './assets/safepal-icon.svg';
import WALLETCONNECT_ICON from './assets/walletconnect-icon.svg';
import BITGET_ICON from './assets/bitget-icon.svg';
import GATEWALLET_ICON from './assets/gateweb3-icon.svg';

export function WalletList({ connectors, onClose }: WalletListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <img src={Airdao} alt='AIRDAO logo' className={styles.logo} />
        <h3 className={styles.title}>Connect a wallet to use AirDAO</h3>
      </div>
      <div className={styles.list}>
        {connectors.map((c) => (
          <React.Fragment key={c.uid}>
            <Option connector={c} onClose={onClose} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const Option = ({
  connector,
  onClose,
}: {
  connector: Connector;
  onClose: () => void;
}) => {
  const { connect } = useConnect();
  const { isConnecting, isReconnecting } = useAccount();
  const icon = CONNECTOR_ICONS[connector.name] ?? connector.icon;
  const isDisabled = isConnecting || isReconnecting;
  const isWalletInstalled = connector?.isPredefined;
  const IsWalletConnect = connector?.name === 'WalletConnect';

  const handleConnect = async (connector: Connector) => {
    try {
      connect({ connector });
      onClose();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <button
      disabled={isDisabled}
      onClick={() => handleConnect(connector)}
      className={styles.connector}
    >
      <img src={icon} alt={connector.name} className={styles.walletIcon} />
      <div className={styles.walletInfo}>
        <h3 className={styles.title}>{connector.name}</h3>
        <span className={styles.sunTitle}>
          {!isWalletInstalled
            ? `Connect using ${!IsWalletConnect ? 'your' : ''} ${connector.name}`
            : `${connector.name}`}
        </span>
      </div>
      <img
        className={styles.arrowIcon}
        src={ArrowRightIcon}
        alt='arrow-right icon'
      />
    </button>
  );
};

export const CONNECTOR_ICONS: { [key: string]: string } = {
  [CONNECTOR_NAME.WalletConnect]: WALLETCONNECT_ICON,
  [CONNECTOR_NAME.MetaMask]: METAMASK_ICON,
  [CONNECTOR_NAME.SafePal]: SAFEPAL_ICON,
  [CONNECTOR_NAME.Bitget]: BITGET_ICON,
  [CONNECTOR_NAME.GateWallet]: GATEWALLET_ICON,
};
