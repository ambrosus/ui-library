import { MouseEventHandler } from 'react';

export interface TabsRoundProps {
  tabsList: string[];
  onChange: (value: string) => void;
  className?: string;
}

export interface TabProps {
  name: string;
  isActive: boolean;
  onClick: MouseEventHandler;
}
