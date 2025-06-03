
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const ThemeSelector = ({ currentTheme, onThemeChange }: ThemeSelectorProps) => {
  const themes = [
    { id: 'light', name: 'Light', icon: Sun, preview: 'bg-white border-gray-200' },
    { id: 'dark', name: 'Dark Black', icon: Moon, preview: 'bg-gray-900 border-gray-700' },
    { id: 'asphalt', name: 'Asphalt Pro', icon: Sun, preview: 'bg-gray-800 border-yellow-400' },
    { id: 'safety', name: 'Safety Orange', icon: Sun, preview: 'bg-orange-500 border-orange-600' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Theme Selection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <Button
                key={theme.id}
                variant={currentTheme === theme.id ? 'default' : 'outline'}
                size="sm"
                className="h-auto p-2 flex-col space-y-1"
                onClick={() => onThemeChange(theme.id)}
              >
                <div className={`w-6 h-6 rounded border-2 ${theme.preview}`} />
                <span className="text-xs">{theme.name}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeSelector;
