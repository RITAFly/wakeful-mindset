
import React, { createContext, useContext, useState, useEffect } from "react";
import { Alarm } from "@/types/alarmTypes";
import { getSampleAlarms } from "@/utils/alarmUtils";
import { toast } from "@/hooks/use-toast";

interface AlarmContextType {
  alarms: Alarm[];
  addAlarm: (alarm: Alarm) => void;
  updateAlarm: (alarm: Alarm) => void;
  deleteAlarm: (id: string) => void;
  toggleAlarm: (id: string, enabled: boolean) => void;
  getAlarm: (id: string) => Alarm | undefined;
}

const AlarmContext = createContext<AlarmContextType | undefined>(undefined);

export const AlarmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alarms, setAlarms] = useState<Alarm[]>(() => {
    const savedAlarms = localStorage.getItem("alarms");
    return savedAlarms ? JSON.parse(savedAlarms) : getSampleAlarms();
  });

  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  const addAlarm = (alarm: Alarm) => {
    setAlarms(prev => [...prev, alarm]);
    toast({
      title: "Alarm set",
      description: `Alarm set for ${alarm.time} ${alarm.amPm}`,
    });
  };

  const updateAlarm = (alarm: Alarm) => {
    setAlarms(prev => 
      prev.map(a => a.id === alarm.id ? alarm : a)
    );
  };

  const deleteAlarm = (id: string) => {
    setAlarms(prev => prev.filter(alarm => alarm.id !== id));
    toast({
      title: "Alarm deleted",
      description: "The alarm has been removed",
    });
  };

  const toggleAlarm = (id: string, enabled: boolean) => {
    setAlarms(prev => 
      prev.map(alarm => 
        alarm.id === id ? { ...alarm, enabled } : alarm
      )
    );
  };

  const getAlarm = (id: string) => {
    return alarms.find(alarm => alarm.id === id);
  };

  return (
    <AlarmContext.Provider value={{ 
      alarms, 
      addAlarm, 
      updateAlarm, 
      deleteAlarm,
      toggleAlarm,
      getAlarm
    }}>
      {children}
    </AlarmContext.Provider>
  );
};

export const useAlarms = () => {
  const context = useContext(AlarmContext);
  if (context === undefined) {
    throw new Error("useAlarms must be used within an AlarmProvider");
  }
  return context;
};
