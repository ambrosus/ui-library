import React from "react";

export interface RadioProps {
  label?: string | React.ReactNode;
  size?: 24 | 20;
  disabled?: boolean;
  className?: string;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
