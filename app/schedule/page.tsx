"use client";

import { useState, useEffect } from 'react';
import { getUpcomingCollections } from '@/lib/utils/collection';
import { NextCollection } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const getWasteTypeStyle = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-waste-pmc';
    case 'green':
      return 'bg-waste-organic';
    case '#abaf7e':
      return 'bg-waste-residual';
    default:
      return `bg-[${color}]`;
  }
};

export default function Schedule() {
  const [collections, setCollections] = useState<NextCollection[]>([]);

  useEffect(() => {
    setCollections(getUpcomingCollections(20));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </Link>
        <h1 className="text-4xl font-bold">Calendrier des collectes</h1>
      </div>

      <div className="space-y-4">
        {collections.map((collection, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${getWasteTypeStyle(collection.wasteType.color)}`} />
              <div>
                <p className="font-medium">{collection.wasteType.name}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(collection.date), 'EEEE d MMMM yyyy', { locale: fr })}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}