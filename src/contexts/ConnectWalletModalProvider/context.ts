import React from 'react';

export const ConnectWalletModalContext = React.createContext({
  isOpen: false,
  toggleModal: () => {},
});
