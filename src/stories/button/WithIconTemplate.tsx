import { ChartButton, type ChartButtonProps } from "./ChartButton";
import { CategoryHeartOutline } from "@admiral-ds/icons";

export const WithIconTemplate = (props: ChartButtonProps) => (
  <ChartButton {...props} iconStart={<CategoryHeartOutline />} />
);
