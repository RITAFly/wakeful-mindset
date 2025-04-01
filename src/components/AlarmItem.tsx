
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { formatDay } from "@/utils/dateUtils";
import { Alarm } from "@/types/alarmTypes";

interface AlarmItemProps {
  alarm: Alarm;
  onToggle: (id: string, enabled: boolean) => void;
  onClick: (alarm: Alarm) => void;
}

const AlarmItem = ({ alarm, onToggle, onClick }: AlarmItemProps) => {
  const { id, time, amPm, name, days, enabled, wakeUpMode } = alarm;

  const handleToggle = () => {
    onToggle(id, !enabled);
  };

  return (
    <div className="border-b border-gray-200 py-6" onClick={() => onClick(alarm)}>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-end">
            <span className="text-5xl font-bold leading-none">{time}</span>
            <span className="text-xl ml-1 mb-1">{amPm}</span>
          </div>
          <div className="mt-1 text-lg font-medium">{name}</div>
          <div className="text-sm text-gray-500 mt-1">{formatDay(days)}</div>
          
          {wakeUpMode && (
            <div className="text-sm text-gray-600 mt-2">
              {wakeUpMode === "photo" && "Take a picture to dismiss"}
              {wakeUpMode === "math" && "Solve math problems to dismiss"}
              {wakeUpMode === "shake" && "Shake to dismiss"}
              {wakeUpMode === "slide" && "Slide to dismiss"}
            </div>
          )}
        </div>
        
        <Switch 
          checked={enabled}
          onCheckedChange={handleToggle}
          className="alarm-switch"
          thumbClassName="alarm-switch-thumb"
        />
      </div>
    </div>
  );
};

export default AlarmItem;
