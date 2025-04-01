
import { Plus } from "lucide-react";

interface AddAlarmButtonProps {
  onClick: () => void;
}

const AddAlarmButton = ({ onClick }: AddAlarmButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-6 rounded-full bg-alarm-secondary shadow-lg p-4 z-40 hover:bg-purple-600 transition-colors"
    >
      <Plus className="w-6 h-6 text-white" />
    </button>
  );
};

export default AddAlarmButton;
