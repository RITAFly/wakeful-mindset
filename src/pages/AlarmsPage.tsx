
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlarmItem from "@/components/AlarmItem";
import AddAlarmButton from "@/components/AddAlarmButton";
import { useAlarms } from "@/context/AlarmContext";
import { Alarm } from "@/types/alarmTypes";

const AlarmsPage = () => {
  const navigate = useNavigate();
  const { alarms, toggleAlarm } = useAlarms();
  
  const handleToggleAlarm = (id: string, enabled: boolean) => {
    toggleAlarm(id, enabled);
  };

  const handleAlarmClick = (alarm: Alarm) => {
    navigate(`/edit-alarm/${alarm.id}`);
  };

  const handleAddAlarm = () => {
    navigate("/create-alarm");
  };

  return (
    <div className="container max-w-md mx-auto px-4 pb-20">
      <h1 className="text-4xl font-bold my-6">Alarms</h1>
      
      <div>
        {alarms.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No alarms set</p>
            <p className="text-gray-400 mt-2">Create an alarm to get started</p>
          </div>
        ) : (
          alarms
            .sort((a, b) => {
              // Convert time to minutes for comparison
              const [aHour, aMin] = a.time.split(":").map(Number);
              const [bHour, bMin] = b.time.split(":").map(Number);
              
              const aMinutes = (aHour % 12) * 60 + aMin + (a.amPm === "PM" ? 12 * 60 : 0);
              const bMinutes = (bHour % 12) * 60 + bMin + (b.amPm === "PM" ? 12 * 60 : 0);
              
              return aMinutes - bMinutes;
            })
            .map((alarm) => (
              <AlarmItem
                key={alarm.id}
                alarm={alarm}
                onToggle={handleToggleAlarm}
                onClick={handleAlarmClick}
              />
            ))
        )}
      </div>
      
      <AddAlarmButton onClick={handleAddAlarm} />
    </div>
  );
};

export default AlarmsPage;
