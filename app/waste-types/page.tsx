"use client";

import { wasteTypes } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

export default function WasteTypes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </Link>
        <h1 className="text-4xl font-bold">Types de déchets</h1>
      </div>

      <div className="grid gap-6">
        {wasteTypes.map((waste) => (
          <Card key={waste.id} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-4 h-4 rounded-full ${getWasteTypeStyle(waste.color)}`} />
              <h2 className="text-2xl font-semibold">{waste.name}</h2>
            </div>
            <p className="text-muted-foreground mb-4">{waste.description}</p>
            <div>
              <h3 className="font-medium mb-2">Règles de tri :</h3>
              <ul className="list-disc list-inside space-y-1">
                {waste.rules.map((rule, index) => (
                  <li key={index} className="text-muted-foreground">{rule}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}