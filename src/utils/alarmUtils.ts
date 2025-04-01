
import { Alarm, DayOfWeek, WakeUpMode } from "@/types/alarmTypes";
import { formatTime } from "@/utils/dateUtils";

// Generate a unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Create a new alarm object
export const createAlarm = (
  hours: number,
  minutes: number,
  name: string,
  days: DayOfWeek[],
  wakeUpMode?: WakeUpMode,
  taskDetail?: string
): Alarm => {
  const { time, amPm } = formatTime(hours, minutes);
  
  return {
    id: generateId(),
    time,
    amPm,
    name,
    days,
    enabled: true,
    wakeUpMode,
    taskDetail
  };
};

// Sample alarms for initial state
export const getSampleAlarms = (): Alarm[] => {
  return [
    {
      id: "1",
      time: "7:00",
      amPm: "AM",
      name: "Wake Up",
      days: ["mon", "tue", "wed", "thu", "fri"],
      enabled: true
    },
    {
      id: "2",
      time: "6:15",
      amPm: "AM",
      name: "Gym",
      days: ["tue"],
      enabled: true,
      wakeUpMode: "photo",
      taskDetail: "Take a picture of your desk"
    },
    {
      id: "3",
      time: "8:30",
      amPm: "AM",
      name: "Math Problems",
      days: ["sat", "sun"],
      enabled: true,
      wakeUpMode: "math",
      taskDetail: "3×8+4=?"
    },
    {
      id: "4",
      time: "10:00",
      amPm: "AM",
      name: "Weekend",
      days: ["sat", "sun"],
      enabled: false
    }
  ];
};
