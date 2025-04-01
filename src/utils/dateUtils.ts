
import { DayOfWeek } from "@/types/alarmTypes";

export const formatDay = (days: DayOfWeek[]): string => {
  if (days.length === 0) {
    return "One time";
  }

  if (days.length === 7) {
    return "Every day";
  }

  if (days.includes("mon") && 
      days.includes("tue") && 
      days.includes("wed") && 
      days.includes("thu") && 
      days.includes("fri") && 
      !days.includes("sat") && 
      !days.includes("sun")) {
    return "Weekdays";
  }

  if (!days.includes("mon") && 
      !days.includes("tue") && 
      !days.includes("wed") && 
      !days.includes("thu") && 
      !days.includes("fri") && 
      days.includes("sat") && 
      days.includes("sun")) {
    return "Weekend";
  }

  const dayMap: Record<DayOfWeek, string> = {
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun"
  };

  return days.map(day => dayMap[day]).join(", ");
};

export const formatTime = (hours: number, minutes: number): { time: string; amPm: string } => {
  let hour = hours % 12;
  if (hour === 0) hour = 12;
  
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHour = hour.toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  
  return {
    time: `${formattedHour}:${formattedMinutes}`,
    amPm
  };
};

export const is24HourFormat = (): boolean => {
  return new Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric'
  }).resolvedOptions().hour12 === false;
};
