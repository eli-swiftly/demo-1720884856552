import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Mail, FileText, CheckSquare } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// Property Management Component
const PropertyManagementComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-15' },
    { id: 2, name: 'Retail Store B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Office Building C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-20' },
  ]);

  const handleActionChange = (id: number, newStatus: string, newAction: string) => {
    setProperties(properties.map(prop => 
      prop.id === id ? {...prop, status: newStatus, nextAction: newAction, nextActionDate: getNextActionDate(newAction)} : prop
    ));
  };

  const getNextActionDate = (action: string) => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Next Action Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
              <td>
                <button 
                  onClick={() => handleActionChange(
                    property.id, 
                    property.status === 'Vacant' ? 'Occupied' : 'Vacant',
                    property.nextAction === 'Occupy' ? 'Vacate' : 'Occupy'
                  )}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {property.nextAction}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Invoice Processing Component
const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Shopping Center A', amount: 5000, status: 'Pending', dueDate: '2023-09-30' },
    { id: 2, property: 'Retail Store B', amount: 3500, status: 'Paid', dueDate: '2023-09-15' },
    { id: 3, property: 'Office Building C', amount: 7000, status: 'Overdue', dueDate: '2023-09-01' },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setInvoices(invoices.map(inv => 
      inv.id === id ? {...inv, status: newStatus} : inv
    ));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.dueDate}</td>
              <td>
                <select 
                  value={invoice.status}
                  onChange={(e) => handleStatusChange(invoice.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const customConfig: AppConfig = {
  title: "QuoinStone Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#3B82F6",
  secondaryColor: "#93C5FD",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyManagement",
        label: "Property Management",
        description: "Manage property occupancy cycles",
        icon: Home
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Process and track invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#3B82F6", "#93C5FD"],
        data: [
          { name: 'Occupied', value: 60 },
          { name: 'Vacant', value: 40 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#3B82F6"],
        data: [
          { name: 'Paid', count: 50 },
          { name: 'Pending', count: 30 },
          { name: 'Overdue', count: 20 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueByProperty: {
        type: "bar",
        dataKeys: ["revenue"],
        colors: ["#3B82F6"],
        data: [
          { property: 'Shopping Center A', revenue: 500000 },
          { property: 'Retail Store B', revenue: 300000 },
          { property: 'Office Building C', revenue: 700000 },
        ]
      },
      occupancyRate: {
        type: "line",
        dataKeys: ["rate"],
        colors: ["#3B82F6"],
        data: [
          { month: 'Jan', rate: 80 },
          { month: 'Feb', rate: 85 },
          { month: 'Mar', rate: 82 },
          { month: 'Apr', rate: 88 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retailer", industry: "Retail" },
    { id: "client2", name: "Office Space Inc", industry: "Commercial Real Estate" },
    { id: "client3", name: "Shopping Mall Group", industry: "Retail" },
  ],
  features: {
    propertyManagement: true,
    invoiceProcessing: true,
    analytics: true,
    reporting: true,
  }
};

const customComponents: CustomComponents = {
  propertyManagement: PropertyManagementComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

const customData: CustomData = {
  propertyTypes: ['Shopping Center', 'Retail Store', 'Office Building'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  occupancyStatuses: ['Vacant', 'Occupied'],
};

export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};