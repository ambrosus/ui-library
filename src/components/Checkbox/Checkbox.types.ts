import React from "react";

export interface CheckboxProps {
  label?: string;
  size?: 24 | 20;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
