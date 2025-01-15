"use client";

import { useState, useEffect } from 'react';
import { wasteTypes } from '@/lib/data';
import { NotificationSetting } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Bell } from 'lucide-react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('notificationSettings');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return wasteTypes.map(type => ({
      wasteTypeId: type.id,
      daysBeforeCollection: 1,
      timeOfDay: '18:00',
      enabled: false,
    }));
  });

  useEffect(() => {
    localStorage.setItem('notificationSettings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (wasteTypeId: number, updates: Partial<NotificationSetting>) => {
    setSettings(current =>
      current.map(setting =>
        setting.wasteTypeId === wasteTypeId
          ? { ...setting, ...updates }
          : setting
      )
    );
  };

  const getWasteTypeStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-waste-pmc';
      case 'green':
        return 'bg-waste-organic';
      case 'brown':
        return 'bg-waste-cardboard';
      default:
        return `bg-[${color}]`;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold">Paramètres des notifications</h1>
          <Bell className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="grid gap-6">
        {wasteTypes.map((waste) => {
          const setting = settings.find(s => s.wasteTypeId === waste.id)!;
          
          return (
            <Card key={waste.id} className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-4 h-4 rounded-full ${getWasteTypeStyle(waste.color)}`} />
                  <h2 className="text-xl font-semibold">{waste.name}</h2>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Me notifier</label>
                    <Select
                      value={setting.daysBeforeCollection.toString()}
                      onValueChange={(value) => 
                        updateSetting(waste.id, { daysBeforeCollection: parseInt(value) })
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Le jour même</SelectItem>
                        <SelectItem value="1">1 jour avant</SelectItem>
                        <SelectItem value="2">2 jours avant</SelectItem>
                        <SelectItem value="3">3 jours avant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">À</label>
                    <Select
                      value={setting.timeOfDay}
                      onValueChange={(value) => 
                        updateSetting(waste.id, { timeOfDay: value })
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">8:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                        <SelectItem value="20:00">20:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch
                      checked={setting.enabled}
                      onCheckedChange={(checked) =>
                        updateSetting(waste.id, { enabled: checked })
                      }
                    />
                    <label className="text-sm text-muted-foreground">
                      {setting.enabled ? 'Activé' : 'Désactivé'}
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}