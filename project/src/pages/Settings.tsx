import { useState } from 'react';
import { Bell, Mail, Shield, Globe, Moon, Sun } from 'lucide-react';

interface SettingsSection {
  id: string;
  title: string;
  description: string;
  icon: typeof Bell;
  fields: {
    id: string;
    label: string;
    type: 'toggle' | 'select' | 'input';
    value?: boolean | string;
    options?: { value: string; label: string }[];
  }[];
}

const settingsSections: SettingsSection[] = [
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Manage how you receive notifications.',
    icon: Bell,
    fields: [
      {
        id: 'email-notifications',
        label: 'Email Notifications',
        type: 'toggle',
        value: true,
      },
      {
        id: 'push-notifications',
        label: 'Push Notifications',
        type: 'toggle',
        value: false,
      },
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance',
    description: 'Customize the look and feel of the application.',
    icon: Moon,
    fields: [
      {
        id: 'theme',
        label: 'Theme',
        type: 'select',
        value: 'light',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'system', label: 'System' },
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Manage your security preferences.',
    icon: Shield,
    fields: [
      {
        id: 'two-factor',
        label: 'Two-factor Authentication',
        type: 'toggle',
        value: false,
      },
      {
        id: 'session-timeout',
        label: 'Session Timeout (minutes)',
        type: 'input',
        value: '30',
      },
    ],
  },
];

export default function Settings() {
  const [settings, setSettings] = useState(settingsSections);

  const handleToggle = (sectionId: string, fieldId: string) => {
    setSettings(prev =>
      prev.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            fields: section.fields.map(field => {
              if (field.id === fieldId && field.type === 'toggle') {
                return { ...field, value: !field.value };
              }
              return field;
            }),
          };
        }
        return section;
      })
    );
  };

  const handleChange = (sectionId: string, fieldId: string, value: string) => {
    setSettings(prev =>
      prev.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            fields: section.fields.map(field => {
              if (field.id === fieldId) {
                return { ...field, value };
              }
              return field;
            }),
          };
        }
        return section;
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>

      <div className="space-y-6">
        {settings.map((section) => (
          <div key={section.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <section.icon className="h-6 w-6 text-gray-400 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{section.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.id} className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    {field.type === 'toggle' && (
                      <button
                        onClick={() => handleToggle(section.id, field.id)}
                        className={`${
                          field.value ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                      >
                        <span
                          className={`${
                            field.value ? 'translate-x-5' : 'translate-x-0'
                          } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                        />
                      </button>
                    )}
                    {field.type === 'select' && (
                      <select
                        value={field.value as string}
                        onChange={(e) => handleChange(section.id, field.id, e.target.value)}
                        className="mt-1 block w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      >
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                    {field.type === 'input' && (
                      <input
                        type="text"
                        value={field.value as string}
                        onChange={(e) => handleChange(section.id, field.id, e.target.value)}
                        className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}