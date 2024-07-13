import React, { useState } from "react";
import { customization } from "./appCustomization";
import { DashboardContent, AnalyticsContent, GenericTabContent } from "./ContentComponents";
import { SettingsContent } from "./SettingsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardDescription, CardHeader, CardTitle, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components";
import { Home, BarChart2, Settings, Search, User } from 'lucide-react';

const SyncaDemoDash: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("dashboard");
  const [activeTab, setActiveTab] = useState<string>(customization.config.dashboard.tabs[0].id);
  const [selectedClient, setSelectedClient] = useState<string>("");

  const renderSidebar = () => (
    <aside className="w-16 bg-white flex flex-col items-center py-6">
      <div className="mb-8 cursor-pointer" onClick={() => setActivePage("dashboard")}>
        <Home className={`w-6 h-6 ${activePage === "dashboard" ? 'text-blue-500' : 'text-gray-400'}`} />
      </div>
      <div className="mb-8 cursor-pointer" onClick={() => setActivePage("analytics")}>
        <BarChart2 className={`w-6 h-6 ${activePage === "analytics" ? 'text-blue-500' : 'text-gray-400'}`} />
      </div>
      <div className="mb-8 cursor-pointer" onClick={() => setActivePage("settings")}>
        <Settings className={`w-6 h-6 ${activePage === "settings" ? 'text-blue-500' : 'text-gray-400'}`} />
      </div>
    </aside>
  );

  const renderTopBar = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Search size={20} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 outline-none"
        />
      </div>
      <span className="font-bold text-lg mr-36" style={{ color: customization.config.primaryColor }}>
          {customization.config.companyName}
        </span>
      <div className="flex items-center">
        <span className="text-gray-700 mr-4">Hello, {customization.config.userName}</span>
        <User size={24} className="text-gray-700" />
      </div>
    </header>
  );

  const renderDashboardContent = () => (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6" style={{ color: customization.config.primaryColor }}>Dashboard</h1>
      {customization.config.clients && customization.config.clients.length > 0 && (
        <div className="mb-6 max-w-xs">
          <Select
            value={selectedClient}
            onValueChange={setSelectedClient}
          >
            <SelectTrigger id="client-select" className="w-full">
              <SelectValue placeholder="Select a client" />
            </SelectTrigger>
            <SelectContent>
              {customization.config.clients.map((client) => (
                <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-200 p-1 rounded-lg mb-6">
          {customization.config.dashboard.tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id} 
              className="flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-200"
              style={{
                backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? customization.config.primaryColor : 'gray',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              }}
            >
              {tab.icon && <tab.icon size={20} className="mr-2" />}
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {customization.config.dashboard.tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <Card>
              <CardHeader>
                <CardTitle>{tab.label}</CardTitle>
                <CardDescription>{tab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <GenericTabContent config={customization.config} tabId={tab.id} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );


  const renderAnalyticsContent = () => (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6" style={{ color: customization.config.primaryColor }}>Analytics</h1>
      <AnalyticsContent config={customization.config} />
    </div>
  );

  const renderSettingsContent = () => (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6" style={{ color: customization.config.primaryColor }}>Settings</h1>
      <SettingsContent />
    </div>
  );


  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return renderDashboardContent();
      case "analytics":
        return renderAnalyticsContent();
      case "settings":
        return renderSettingsContent();
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-white text-gray-800 min-h-screen">
      {renderSidebar()}
      <div className="flex-1">
        {renderTopBar()}
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SyncaDemoDash;