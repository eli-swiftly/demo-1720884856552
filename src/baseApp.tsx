/* src/appCustomization.tsx */


import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone } from 'lucide-react';


type CustomComponentProps = {
 config: AppConfig;
};


interface CustomComponents {
 [key: string]: React.FC<CustomComponentProps>;
}


interface CustomData {
 [key: string]: any;
}


// =============== CUSTOM COMPONENTS ===============
// Example: Deal Pipeline Component
const DealPipelineComponent: React.FC<CustomComponentProps> = ({ config }) => {
 const [deals, setDeals] = useState([
   { id: 1, company: 'EcoTech Solutions', stage: 'Initial Contact', value: 5000000 },
   { id: 2, name: 'CircularWare', stage: 'Proposal', value: 3000000 },
   { id: 3, name: 'GreenBuild Systems', stage: 'Negotiation', value: 7000000 },
 ]);


 return (
   <div className="p-4 bg-white rounded-lg shadow">
     <h2 className="text-xl font-bold mb-4">Deal Pipeline</h2>
     <table className="w-full">
       <thead>
         <tr>
           <th>Company</th>
           <th>Stage</th>
           <th>Value</th>
         </tr>
       </thead>
       <tbody>
         {deals.map(deal => (
           <tr key={deal.id}>
             <td>{deal.company}</td>
             <td>{deal.stage}</td>
             <td>${deal.value.toLocaleString()}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );
};


// Example: Portfolio Performance Component
const PortfolioPerformanceComponent: React.FC<CustomComponentProps> = ({ config }) => {
 return (
   <div className="p-4 bg-white rounded-lg shadow">
     <h2 className="text-xl font-bold mb-4">Portfolio Performance</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
         Revenue Growth Chart
       </div>
       <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
         Profit Margin Chart
       </div>
     </div>
   </div>
 );
};


// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
 title: "Bridges Fund Management - PE Origination",
 companyName: "Bridges Fund Management",
 logo: "/path/to/bridges-logo.png",
 primaryColor: "#4F46E5",
 secondaryColor: "#818CF8",
 userName: "John Doe", //This should always be the client’s name
 dashboard: {
   tabs: [
     {
       id: "dealPipeline",
       label: "Deal Pipeline",
       description: "Track potential investments",
       icon: Phone
     },
     {
       id: "portfolioPerformance",
       label: "Portfolio Performance",
       description: "Monitor existing investments",
       icon: BarChart2
     },
   ] as TabConfig[],
   charts: {
     dealsByStage: {
       type: "bar",
       dataKeys: ["count"],
       colors: ["#4F46E5"],
       data: [
         { name: 'Initial Contact', count: 10 },
         { name: 'Proposal', count: 5 },
         { name: 'Negotiation', count: 3 },
         { name: 'Closed', count: 2 },
       ]
     },
     investmentByIndustry: {
       type: "pie",
       dataKeys: ["value"],
       colors: ["#4F46E5", "#818CF8", "#C7D2FE", "#E0E7FF"],
       data: [
         { name: 'Energy Transition', value: 40 },
         { name: 'Circular Economy', value: 30 },
         { name: 'Decarbonizing Built Environment', value: 20 },
         { name: 'Other', value: 10 },
       ]
     },
   }
 },
 analytics: {
   charts: {
     revenueGrowth: {
       type: "line",
       dataKeys: ["growth"],
       colors: ["#4F46E5"],
       data: [
         { year: '2019', growth: 20 },
         { year: '2020', growth: 18 },
         { year: '2021', growth: 25 },
         { year: '2022', growth: 30 },
       ]
     },
     profitMargin: {
       type: "bar",
       dataKeys: ["margin"],
       colors: ["#818CF8"],
       data: [
         { year: '2019', margin: 15 },
         { year: '2020', margin: 14 },
         { year: '2021', margin: 17 },
         { year: '2022', margin: 19 },
       ]
     },
   }
 },
 clients: [
   { id: "ecotech", name: "EcoTech Solutions", industry: "Energy Transition" },
   { id: "circularware", name: "CircularWare", industry: "Circular Economy" },
   { id: "greenbuild", name: "GreenBuild Systems", industry: "Decarbonizing Built Environment" },
 ],
 features: {
   dataImport: true,
   analytics: true,
   reporting: true,
   templates: true
 }
};


// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
 dealPipeline: DealPipelineComponent,
 portfolioPerformance: PortfolioPerformanceComponent,
};


// =============== CUSTOM DATA ===============
const customData: CustomData = {
 investmentStages: ['Initial Contact', 'Proposal', 'Negotiation', 'Due Diligence', 'Closed'],
 industries: ['Energy Transition', 'Circular Economy', 'Decarbonizing Built Environment', 'Sustainable Tourism'],
 performanceMetrics: ['Revenue Growth', 'Profit Margin', 'ESG Score', 'Jobs Created']
};


// =============== EXPORT ===============
export const customization = {
 config: customConfig,
 components: customComponents,
 data: customData,
};


// =============== CUSTOMIZATION GUIDE ===============
/*
To customize this application for your specific client needs:


1. Configuration (customConfig):
  - Update the title, companyName, and userName to match the client's information
  - Modify primaryColor and secondaryColor to align with the client's brand colors
  - Adjust the 'dashboard.tabs' array:
    - Modify the 'id', 'label', and 'description' for each tab
    - Choose an appropriate icon from the imported Lucide icons
  - Modify 'dashboard.charts' and 'analytics.charts':
    - Update the data to reflect the client's actual data or use representative dummy data
    - Ensure the chart types (bar, line, pie) are appropriate for the data being displayed
  - Update the 'clients' array with the client's actual portfolio companies or potential investments
  - Adjust 'features' based on the client's specific needs


2. Custom Components:
  - Modify the existing DealPipelineComponent and PortfolioPerformanceComponent or create new components as needed
  - Ensure each component uses the config prop to access client-specific information
  - Update the customComponents object to map your components to the correct tab ids


3. Custom Data:
  - Update the customData object with any additional data structures needed for your client's use case


IMPORTANT:
- Do not change the overall structure of the customization object
- Ensure that the ids used in dashboard.tabs match the keys in the customComponents object
- When creating charts, use the ChartConfig type and ensure the data structure matches what's expected by the Chart component
- Do not import or use components that aren't part of this template (e.g., @/components/ui/card)
- All necessary components are already imported at the top of this file or are available in the global scope
- If you need additional icons, import them from 'lucide-react' at the top of the file


The goal is to create a tailored, functional prototype that closely matches the client's needs and workflows while working within the existing structure of the application.
*/
