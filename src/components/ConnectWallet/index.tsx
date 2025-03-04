import React from 'react';
import { Connector, useAccount, useConnect } from 'wagmi';
import { WalletListProps } from './WalletList.types';
import styles from './connect-wallet.module.css';
import Airdao from './assets/airdao.svg';
import ArrowRightIcon from './assets/arrow-right.svg';
import { MockedConnector } from '../../utils';

export function WalletList({
  connectors,
  promoConnectors,
  onClose,
}: WalletListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <img src={Airdao} alt='AIRDAO logo' className={styles.logo} />
        <h3 className={styles.title}>Connect a wallet to use AirDAO</h3>
      </div>
      <div className={styles.list}>
        {connectors.map((c) => (
          <Option connector={c} onClose={onClose} key={c.uid} />
        ))}
        {promoConnectors &&
          promoConnectors.map((c) => (
            <Option connector={c} mocked onClose={onClose} key={c.name} />
          ))}
      </div>
    </div>
  );
}

const Option = ({ connector, onClose, mocked }: OptionProps) => {
  const { isConnecting, isReconnecting } = useAccount();
  const { connect } = useConnect();
  const icon = connector.icon;
  const isDisabled = isConnecting || isReconnecting;
  const IsWalletConnect = connector?.name === 'WalletConnect';

  const handleConnect = async () => {
    console.log('handleConnect(): ', connector);
    console.log('mocked: ', mocked);

    try {
      if (mocked) {
        connector.connect();
      } else {
        connect({ connector });
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      onClose();
    }
  };

  return (
    <button
      disabled={isDisabled}
      onClick={handleConnect}
      className={styles.connector}
    >
      <img src={icon} alt={connector.name} className={styles.walletIcon} />
      <div className={styles.walletInfo}>
        <h3 className={styles.title}>{connector.name}</h3>
        <span className={styles.sunTitle}>
          {!mocked
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

type OptionProps =
  | {
      onClose: () => void;
      connector: Connector;
      mocked?: false;
    }
  | {
      onClose: () => void;
      connector: MockedConnector;
      mocked: true;
    };
