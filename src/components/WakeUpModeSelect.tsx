
import { Camera, Math, Shake, SlideUnlock } from "@/components/icons";
import { WakeUpMode } from "@/types/alarmTypes";
import { cn } from "@/lib/utils";

interface WakeUpModeSelectProps {
  selectedMode?: WakeUpMode;
  onChange: (mode?: WakeUpMode) => void;
}

const WakeUpModeSelect = ({ selectedMode, onChange }: WakeUpModeSelectProps) => {
  const modes = [
    { id: "photo" as WakeUpMode, icon: Camera, label: "Photo Task" },
    { id: "math" as WakeUpMode, icon: Math, label: "Math Task" },
    { id: "shake" as WakeUpMode, icon: Shake, label: "Shake Task" },
    { id: "slide" as WakeUpMode, icon: SlideUnlock, label: "Slide Unlock" }
  ];

  return (
    <div className="space-y-3">
      {modes.map((mode) => {
        const Icon = mode.icon;
        return (
          <button
            key={mode.id}
            onClick={() => onChange(mode.id === selectedMode ? undefined : mode.id)}
            className={cn(
              "w-full p-3 border rounded-lg flex items-center transition-colors",
              selectedMode === mode.id
                ? "border-alarm-secondary bg-purple-50"
                : "border-gray-200 hover:bg-gray-50"
            )}
          >
            <Icon className="mr-3 h-5 w-5" />
            <span className="font-medium">{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default WakeUpModeSelect;
