import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AppConfig, ChartConfig, CustomComponentProps } from './config';
import { customization } from './appCustomization';

interface ChartProps {
  config: ChartConfig;
}

const Chart: React.FC<ChartProps> = ({ config }) => {
  const { type, dataKeys, colors, data } = config;

  switch (type) {
    case 'line':
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
            <Legend />
            {dataKeys.map((dataKey, index) => (
              <Line
                key={dataKey}
                type="monotone"
                dataKey={dataKey}
                stroke={colors[index]}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
    case 'bar':
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
            <Legend />
            {dataKeys.map((dataKey, index) => (
              <Bar
                key={dataKey}
                dataKey={dataKey}
                fill={colors[index]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      );
    case 'pie':
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKeys[0]}
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill={colors[0]}
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    default:
      return null;
  }
};

export const DashboardContent: React.FC<CustomComponentProps> = ({ config }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(config.dashboard.charts).map(([key, chartConfig]) => (
        <Card key={key} className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{key}</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart config={chartConfig} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};


export const AnalyticsContent: React.FC<CustomComponentProps> = ({ config }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(config.analytics.charts).map(([key, chartConfig]) => (
        <Card key={key} className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{key}</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart config={chartConfig} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Updated GenericTabContent component
export const GenericTabContent: React.FC<CustomComponentProps & { tabId: string }> = ({ config, tabId }) => {
  const CustomComponent = customization.components[tabId];
  return CustomComponent ? <CustomComponent config={config} /> : null;
};