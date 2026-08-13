export interface TooltipPayloadItem {
  name: string;
  value: number;
  color: string;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}