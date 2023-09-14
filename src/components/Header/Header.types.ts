export interface AddressInfoProps {
  address: string;
  isOpen: boolean;
  logout: () => void;
  close: () => void;
}

export interface HeaderConnectedNavProps {
  close: () => void;
  isOpen: boolean;
  // TODO: headerInfoProps
  headerInfo: any;
}

export interface HeaderNavProps {
  close: () => void;
  isOpen: boolean;
  // TODO: headerInfoProps
  headerInfo: any;
  className?: string;
}
