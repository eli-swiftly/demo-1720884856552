/* src/components.tsx */

import React, { ReactNode } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from "@/utils/cn";

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

interface SwitchProps extends SwitchPrimitive.SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}


export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  className, 
  ...props 
}) => (
  <button
    className={cn(
      "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
      variant === 'default' 
        ? "bg-blue-500 text-white hover:bg-blue-600" 
        : "border border-gray-300 text-gray-700 hover:bg-gray-50",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

// Input Component
export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

// Label Component
export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => (
  <label className="block text-sm font-medium text-gray-700" {...props}>
    {children}
  </label>
);

// Card Components
export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("bg-white shadow rounded-lg", className)}>{children}</div>
);

export const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("px-4 py-5 border-b border-gray-200 sm:px-6", className)}>{children}</div>
);

export const CardTitle: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <h3 className={cn("text-lg font-medium leading-6 text-gray-900", className)}>{children}</h3>
);

export const CardDescription: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn("mt-1 text-sm text-gray-500", className)}>{children}</p>
);

export const CardContent: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("px-4 py-5 sm:p-6", className)}>{children}</div>
);

export const CardFooter: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("px-4 py-4 sm:px-6", className)}>{children}</div>
);

// Tabs Components
export const Tabs = TabsPrimitive.Root;

export const TabsList: React.FC<TabsPrimitive.TabsListProps> = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={cn(
      "flex space-x-1 rounded-xl bg-blue-900/20 p-1",
      className
    )}
    {...props}
  />
);

export const TabsTrigger: React.FC<TabsPrimitive.TabsTriggerProps> = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      "px-3 py-1.5 text-sm font-medium text-gray-700 rounded-lg select-none",
      "hover:bg-white/[0.12] focus:outline-none ",
      "data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
);

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, className, ...props }) => (
  <SwitchPrimitive.Root
    className={cn(
      "relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
      checked ? "bg-blue-600" : "bg-gray-200",
      className
    )}
    checked={checked}
    onCheckedChange={onCheckedChange}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out",
        checked ? "translate-x-5" : "translate-x-0"
      )}
    />
  </SwitchPrimitive.Root>
);

export const TabsContent = TabsPrimitive.Content;

// Select Components
export const Select = SelectPrimitive.Root;

export const SelectTrigger: React.FC<SelectPrimitive.SelectTriggerProps> = ({ className, children, ...props }) => (
  <SelectPrimitive.Trigger
    className={cn(
      "flex justify-between w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className="w-4 h-4 opacity-50" />
  </SelectPrimitive.Trigger>
);

export const SelectValue = SelectPrimitive.Value;

export const SelectContent: React.FC<SelectPrimitive.SelectContentProps> = ({ className, children, ...props }) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        "bg-white p-1 rounded-md shadow-lg",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

export const SelectItem: React.FC<SelectPrimitive.SelectItemProps> = ({ className, children, ...props }) => (
  <SelectPrimitive.Item
    className={cn(
      "relative flex items-center px-8 py-2 text-sm text-gray-700 rounded-md select-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
);
