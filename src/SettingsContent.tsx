import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, Button, Switch, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components';

export const SettingsContent: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span>Enable notifications</span>
            <Switch 
              checked={notifications} 
              onCheckedChange={setNotifications}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Theme</label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Language</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline">Change Password</Button>
            <Button variant="outline">Update Profile</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline">Export Data</Button>
            <Button variant="outline" className="text-red-600 hover:bg-red-50">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};