
import { useState, useEffect } from "react";

interface TimeSelectProps {
  initialHour: number;
  initialMinute: number;
  onChange: (hours: number, minutes: number) => void;
}

const TimeSelect = ({ initialHour, initialMinute, onChange }: TimeSelectProps) => {
  const [hours, setHours] = useState(initialHour);
  const [minutes, setMinutes] = useState(initialMinute);
  const [isPm, setIsPm] = useState(hours >= 12);

  useEffect(() => {
    // Convert to 24-hour format before passing to parent
    const hour24 = isPm ? (hours === 12 ? 12 : hours + 12) : (hours === 12 ? 0 : hours);
    onChange(hour24, minutes);
  }, [hours, minutes, isPm, onChange]);

  const adjustHours = (increment: number) => {
    let newHours = (hours + increment) % 12;
    if (newHours === 0) newHours = 12;
    setHours(newHours);
  };

  const adjustMinutes = (increment: number) => {
    let newMinutes = (minutes + increment) % 60;
    if (newMinutes < 0) newMinutes = 59;
    setMinutes(newMinutes);
  };

  const toggleAmPm = () => {
    setIsPm(prev => !prev);
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      <div className="flex flex-col items-center">
        <button 
          className="text-2xl text-gray-500 hover:text-alarm-secondary" 
          onClick={() => adjustHours(1)}
        >
          ▲
        </button>
        <div className="text-6xl font-bold w-20 text-center">{hours.toString().padStart(2, "0")}</div>
        <button 
          className="text-2xl text-gray-500 hover:text-alarm-secondary" 
          onClick={() => adjustHours(-1)}
        >
          ▼
        </button>
      </div>
      
      <div className="text-6xl font-bold">:</div>
      
      <div className="flex flex-col items-center">
        <button 
          className="text-2xl text-gray-500 hover:text-alarm-secondary" 
          onClick={() => adjustMinutes(1)}
        >
          ▲
        </button>
        <div className="text-6xl font-bold w-20 text-center">{minutes.toString().padStart(2, "0")}</div>
        <button 
          className="text-2xl text-gray-500 hover:text-alarm-secondary" 
          onClick={() => adjustMinutes(-1)}
        >
          ▼
        </button>
      </div>
      
      <button 
        onClick={toggleAmPm}
        className="ml-4 h-14 w-16 rounded-lg bg-gray-100 text-lg font-medium hover:bg-gray-200 transition-colors"
      >
        {isPm ? "PM" : "AM"}
      </button>
    </div>
  );
};

export default TimeSelect;
