import { Button } from "@admiral-ds/react-ui";
import type { ButtonProps } from "@admiral-ds/react-ui";

export interface ChartButtonProps extends ButtonProps {
  label: string;
}

/** Primary UI component for user interaction */
export const ChartButton = ({ label, ...props}: ChartButtonProps) => {
  return (
    <Button {...props}>{label}</Button>
  );
};
