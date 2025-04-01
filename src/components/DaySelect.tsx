
import { cn } from "@/lib/utils";
import { DayOfWeek } from "@/types/alarmTypes";

interface DaySelectProps {
  selectedDays: DayOfWeek[];
  onChange: (days: DayOfWeek[]) => void;
}

const DaySelect = ({ selectedDays, onChange }: DaySelectProps) => {
  const days: { label: string; value: DayOfWeek }[] = [
    { label: "M", value: "mon" },
    { label: "T", value: "tue" },
    { label: "W", value: "wed" },
    { label: "T", value: "thu" },
    { label: "F", value: "fri" },
    { label: "S", value: "sat" },
    { label: "S", value: "sun" }
  ];

  const toggleDay = (day: DayOfWeek) => {
    if (selectedDays.includes(day)) {
      onChange(selectedDays.filter(d => d !== day));
    } else {
      onChange([...selectedDays, day]);
    }
  };

  // Shortcuts
  const selectWeekdays = () => {
    onChange(["mon", "tue", "wed", "thu", "fri"]);
  };

  const selectWeekends = () => {
    onChange(["sat", "sun"]);
  };

  const selectEveryday = () => {
    onChange(["mon", "tue", "wed", "thu", "fri", "sat", "sun"]);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        {days.map((day) => (
          <button
            key={day.value}
            onClick={() => toggleDay(day.value)}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
              selectedDays.includes(day.value)
                ? "bg-alarm-secondary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {day.label}
          </button>
        ))}
      </div>
      
      <div className="flex space-x-2 text-sm">
        <button
          onClick={selectWeekdays}
          className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          Weekdays
        </button>
        <button
          onClick={selectWeekends}
          className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          Weekends
        </button>
        <button
          onClick={selectEveryday}
          className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          Every day
        </button>
      </div>
    </div>
  );
};

export default DaySelect;
