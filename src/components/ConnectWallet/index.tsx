import React from 'react';
import { useFilteredConnectors } from '../../hooks/useFilteredConnectors';
import styles from './connect-wallet.module.css';
import Airdao from '@/assets/svg/airdao.svg';

import { Connector, useAccount, useConnect } from 'wagmi';
import ArrowRightIcon from '@/assets/svg/arrow-right.svg';
import { CONNECTOR_NAME } from '../../constants';

import METAMASK_ICON from './assets/metamask-icon.svg';
import SAFEPAL_ICON from './assets/safepal-icon.svg';
import WALLETCONNECT_ICON from './assets/walletconnect-icon.svg';
import BITGET_ICON from './assets/bitget-icon.svg';
import GATEWALLET_ICON from './assets/gateweb3-icon.svg';

export function WalletModal({ closeModal }: { closeModal: () => unknown }) {
  const connectors = useFilteredConnectors();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <img src={Airdao.src} alt='AIRDAO logo' className={styles.logo} />
        <h3 className={styles.title}>Connect a wallet to use AirDAO</h3>
      </div>
      <div className={styles.list}>
        {connectors.map((c) => (
          <Option connector={c} key={c.uid} closeModal={closeModal} />
        ))}
      </div>
    </div>
  );
}

const Option = ({
  connector,
  closeModal,
}: {
  connector: Connector;
  closeModal: () => unknown;
}) => {
  const { connect } = useConnect();
  const { isConnecting, isReconnecting } = useAccount();
  const icon = CONNECTOR_ICONS[connector.name] ?? connector.icon;
  const isDisabled = isConnecting || isReconnecting;
  const isWalletInstalled = connector.isPredefined;
  const IsWalletConnect = connector?.name === 'WalletConnect';

  const handleConnect = async (connector: Connector) => {
    try {
      connect({ connector });
      closeModal();
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
      <img src={icon.src} alt={connector.name} className={styles.walletIcon} />
      <div className={styles.walletInfo}>
        <h3 className={styles.title}>{connector.name}</h3>
        <span className={styles.sunTitle}>
          {!isWalletInstalled
            ? `Connect using ${!IsWalletConnect ? 'your' : ''} ${connector.name}`
            : `${connector?.name}`}
        </span>
      </div>
      <img
        className={styles.arrowIcon}
        src={ArrowRightIcon.src}
        alt='arrow-right'
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
