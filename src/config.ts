import { LucideIcon } from 'lucide-react';

export interface TabConfig {
  id: string;
  label: string;
  description: string;
  icon?: LucideIcon;
}

export interface ClientConfig {
  id: string;
  name: string;
  industry: string;
}

export interface ChartConfig {
  type: 'bar' | 'line' | 'pie';
  dataKeys: string[];
  colors: string[];
  data: any[];
}

export interface DashboardConfig {
  tabs: TabConfig[];
  charts: {
    [key: string]: ChartConfig;
  };
}

export interface AnalyticsConfig {
  charts: {
    [key: string]: ChartConfig;
  };
}

export interface LocationConfig {
  id: string;
  name: string;
  address: string;
}

export interface AppConfig {
  title: string;
  companyName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  userName: string;
  dashboard: DashboardConfig;
  analytics: AnalyticsConfig;
  clients?: ClientConfig[];
  locations?: LocationConfig[];
  features: {
    [key: string]: boolean | string | number | object;
  };
  [key: string]: any; // This allows for additional properties
}

export interface CustomComponentProps {
  config: AppConfig;
}