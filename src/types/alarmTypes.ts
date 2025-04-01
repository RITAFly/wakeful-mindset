
export type WakeUpMode = "photo" | "math" | "shake" | "slide";
export type DayOfWeek = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface Alarm {
  id: string;
  time: string;
  amPm: string;
  name: string;
  days: DayOfWeek[];
  enabled: boolean;
  wakeUpMode?: WakeUpMode;
  taskDetail?: string;
}
