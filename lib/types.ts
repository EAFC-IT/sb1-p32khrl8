export interface WasteType {
  id: number;
  name: string;
  color: string;
  description: string;
  rules: string[];
}

export interface CollectionDate {
  date: string;
  wasteTypeId: number;
}

export interface PostponedDate {
  originalDate: string;
  newDate: string;
  wasteTypeId: number;
}

export interface NextCollection {
  date: string;
  wasteType: WasteType;
}

export interface NotificationSetting {
  wasteTypeId: number;
  daysBeforeCollection: number;
  timeOfDay: string;
  enabled: boolean;
}