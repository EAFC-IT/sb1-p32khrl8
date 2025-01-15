"use client";

import { useEffect, useState } from 'react';
import { NextCollection } from '@/lib/types';
import { getNextCollections } from '@/lib/utils/collection';
import { Calendar, Recycle, Bell, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Logo } from '@/components/ui/logo';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const getWasteTypeStyle = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-waste-pmc text-white';
    case 'green':
      return 'bg-waste-organic text-white';
    case '#abaf7e':
      return 'bg-waste-residual text-white';
    default:
      return `bg-[${color}] text-white`;
  }
};

export default function Home() {
  const [nextCollections, setNextCollections] = useState<NextCollection[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const settings = localStorage.getItem('notificationSettings');
      if (settings) {
        return JSON.parse(settings).some((s: any) => s.enabled);
      }
    }
    return false;
  });

  useEffect(() => {
    setNextCollections(getNextCollections());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-12">
          <div>
            <Logo size="lg" className="mb-2" />
            <p className="text-sm sm:text-base text-muted-foreground">Gérez vos déchets simplement</p>
          </div>
          <Link href="/notifications">
            <Button
              variant={notificationsEnabled ? "secondary" : "outline"}
              className="w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {notificationsEnabled ? (
                <>
                  <Bell className="mr-2 h-4 w-4" />
                  <span className="text-sm">Notifications activées</span>
                </>
              ) : (
                <>
                  <Settings className="mr-2 h-4 w-4" />
                  <span className="text-sm">Configurer les notifications</span>
                </>
              )}
            </Button>
          </Link>
        </div>

        {nextCollections.length > 0 ? (
          <Card className="p-6 sm:p-8 mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Prochaine collecte</h2>
                <div className="p-3 sm:p-4 rounded-2xl bg-primary shadow-lg">
                  <Recycle className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground animate-spin-slow" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xl sm:text-3xl font-bold text-foreground">
                    {format(new Date(nextCollections[0].date), 'EEEE d MMMM', { locale: fr })}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    N'oubliez pas de sortir vos déchets la veille au soir !
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {nextCollections.map((collection, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 rounded-full font-medium text-sm shadow-md ${getWasteTypeStyle(collection.wasteType.color)}`}
                    >
                      {collection.wasteType.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="p-6 sm:p-8 mb-8 text-center bg-gradient-to-br from-primary/20 to-secondary/20 border-none shadow-xl rounded-3xl">
            <p className="text-base sm:text-lg text-muted-foreground">Aucune collecte prévue</p>
          </Card>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Link href="/schedule" className="block group">
            <Card className="p-4 sm:p-6 hover:bg-secondary/20 transition-all duration-300 border-none shadow-lg rounded-2xl hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-primary group-hover:scale-105 transition-transform duration-300">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-foreground">Calendrier des collectes</h3>
                  <p className="text-sm text-muted-foreground">Voir toutes les dates à venir</p>
                </div>
              </div>
            </Card>
          </Link>
          <Link href="/waste-types" className="block group">
            <Card className="p-4 sm:p-6 hover:bg-primary/20 transition-all duration-300 border-none shadow-lg rounded-2xl hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-secondary group-hover:scale-105 transition-transform duration-300">
                  <Recycle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-foreground">Types de déchets</h3>
                  <p className="text-sm text-muted-foreground">Informations et règles de tri</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}