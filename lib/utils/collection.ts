import { CollectionDate, PostponedDate, WasteType, NextCollection } from '../types';
import { wasteTypes, collectionDates, postponedDates } from '../data';

export function getNextCollections(): NextCollection[] {
  // Pour la démo, on simule que nous sommes en 2025
  const today = new Date();
  today.setFullYear(2025);
  today.setHours(0, 0, 0, 0);

  // Sort collection dates and apply postponements
  const adjustedDates = collectionDates.map(collection => {
    const postponement = postponedDates.find(
      p => p.originalDate === collection.date && p.wasteTypeId === collection.wasteTypeId
    );
    return {
      date: postponement ? postponement.newDate : collection.date,
      wasteTypeId: collection.wasteTypeId
    };
  });

  // Group collections by date
  const nextDate = adjustedDates
    .filter(d => new Date(d.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  if (!nextDate) return [];

  // Find all collections for the next date
  return adjustedDates
    .filter(d => d.date === nextDate.date)
    .map(d => {
      const wasteType = wasteTypes.find(w => w.id === d.wasteTypeId);
      if (!wasteType) return null;
      return {
        date: d.date,
        wasteType
      };
    })
    .filter((collection): collection is NextCollection => collection !== null);
}

export function getUpcomingCollections(limit: number = 10): NextCollection[] {
  // Pour la démo, on simule que nous sommes en 2025
  const today = new Date();
  today.setFullYear(2025);
  today.setHours(0, 0, 0, 0);

  const adjustedDates = collectionDates.map(collection => {
    const postponement = postponedDates.find(
      p => p.originalDate === collection.date && p.wasteTypeId === collection.wasteTypeId
    );
    return {
      date: postponement ? postponement.newDate : collection.date,
      wasteTypeId: collection.wasteTypeId
    };
  });

  return adjustedDates
    .filter(d => new Date(d.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit)
    .map(d => ({
      date: d.date,
      wasteType: wasteTypes.find(w => w.id === d.wasteTypeId)!
    }));
}