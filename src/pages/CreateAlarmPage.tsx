
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TimeSelect from "@/components/TimeSelect";
import DaySelect from "@/components/DaySelect";
import WakeUpModeSelect from "@/components/WakeUpModeSelect";
import { useAlarms } from "@/context/AlarmContext";
import { createAlarm } from "@/utils/alarmUtils";
import { DayOfWeek, WakeUpMode } from "@/types/alarmTypes";

const CreateAlarmPage = () => {
  const navigate = useNavigate();
  const { addAlarm } = useAlarms();
  
  const [name, setName] = useState("Alarm");
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(30);
  const [days, setDays] = useState<DayOfWeek[]>([]);
  const [wakeUpMode, setWakeUpMode] = useState<WakeUpMode | undefined>(undefined);

  const handleTimeChange = (newHours: number, newMinutes: number) => {
    setHours(newHours);
    setMinutes(newMinutes);
  };

  const handleSave = () => {
    const newAlarm = createAlarm(hours, minutes, name, days, wakeUpMode);
    addAlarm(newAlarm);
    navigate("/");
  };

  return (
    <div className="container max-w-md mx-auto px-4 pb-20">
      <div className="flex items-center mt-4 mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-2 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold">New Alarm</h1>
      </div>
      
      <div className="mb-8">
        <label className="block text-lg mb-2">Alarm Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter alarm name"
          className="text-lg py-6"
        />
      </div>
      
      <div className="mb-8">
        <label className="block text-lg mb-2">Time</label>
        <TimeSelect
          initialHour={hours}
          initialMinute={minutes}
          onChange={handleTimeChange}
        />
      </div>
      
      <div className="mb-8">
        <label className="block text-lg mb-2">Repeat</label>
        <DaySelect
          selectedDays={days}
          onChange={setDays}
        />
      </div>
      
      <div className="mb-8">
        <label className="block text-lg mb-2">Wake-Up Mode</label>
        <WakeUpModeSelect
          selectedMode={wakeUpMode}
          onChange={setWakeUpMode}
        />
      </div>
      
      <Button 
        onClick={handleSave}
        className="w-full py-6 text-xl bg-alarm-secondary hover:bg-purple-700"
      >
        Save
      </Button>
    </div>
  );
};

export default CreateAlarmPage;
