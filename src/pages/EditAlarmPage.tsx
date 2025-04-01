
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TimeSelect from "@/components/TimeSelect";
import DaySelect from "@/components/DaySelect";
import WakeUpModeSelect from "@/components/WakeUpModeSelect";
import { useAlarms } from "@/context/AlarmContext";
import { DayOfWeek, WakeUpMode } from "@/types/alarmTypes";
import { formatTime } from "@/utils/dateUtils";

const EditAlarmPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getAlarm, updateAlarm, deleteAlarm } = useAlarms();
  
  const [name, setName] = useState("Alarm");
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(0);
  const [days, setDays] = useState<DayOfWeek[]>([]);
  const [wakeUpMode, setWakeUpMode] = useState<WakeUpMode | undefined>(undefined);
  
  useEffect(() => {
    if (!id) return;
    
    const alarm = getAlarm(id);
    if (!alarm) {
      navigate("/");
      return;
    }
    
    setName(alarm.name);
    
    // Parse time string to get hours and minutes
    const [hourStr, minuteStr] = alarm.time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    
    // Convert to 24-hour format
    if (alarm.amPm === "PM" && hour !== 12) {
      hour += 12;
    } else if (alarm.amPm === "AM" && hour === 12) {
      hour = 0;
    }
    
    setHours(hour);
    setMinutes(minute);
    setDays(alarm.days);
    setWakeUpMode(alarm.wakeUpMode);
  }, [id, getAlarm, navigate]);
  
  const handleTimeChange = (newHours: number, newMinutes: number) => {
    setHours(newHours);
    setMinutes(newMinutes);
  };
  
  const handleSave = () => {
    if (!id) return;
    
    const alarm = getAlarm(id);
    if (!alarm) return;
    
    const { time, amPm } = formatTime(hours, minutes);
    
    const updatedAlarm = {
      ...alarm,
      time,
      amPm,
      name,
      days,
      wakeUpMode
    };
    
    updateAlarm(updatedAlarm);
    navigate("/");
  };
  
  const handleDelete = () => {
    if (!id) return;
    deleteAlarm(id);
    navigate("/");
  };

  return (
    <div className="container max-w-md mx-auto px-4 pb-20">
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="mr-2 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">Edit Alarm</h1>
        </div>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full">
              <Trash2 className="h-6 w-6" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Alarm</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this alarm? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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

export default EditAlarmPage;
