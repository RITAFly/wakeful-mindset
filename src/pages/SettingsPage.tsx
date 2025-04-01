
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Navigation from "@/components/Navigation";

const SettingsPage = () => {
  const [use24HourFormat, setUse24HourFormat] = useState(false);
  const [showSeconds, setShowSeconds] = useState(false);
  const [vibrate, setVibrate] = useState(true);
  const [increasingVolume, setIncreasingVolume] = useState(true);
  const [snoozeEnabled, setSnoozeEnabled] = useState(true);

  return (
    <div className="container max-w-md mx-auto px-4 pb-20">
      <h1 className="text-4xl font-bold my-6">Settings</h1>
      
      <div className="space-y-6">
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Use 24-hour format</h2>
              <p className="text-sm text-gray-500">Display time in 24-hour format</p>
            </div>
            <Switch 
              checked={use24HourFormat} 
              onCheckedChange={setUse24HourFormat} 
              className="alarm-switch"
              thumbClassName="alarm-switch-thumb"
            />
          </div>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Show seconds</h2>
              <p className="text-sm text-gray-500">Display seconds in time</p>
            </div>
            <Switch 
              checked={showSeconds} 
              onCheckedChange={setShowSeconds} 
              className="alarm-switch"
              thumbClassName="alarm-switch-thumb"
            />
          </div>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Vibrate</h2>
              <p className="text-sm text-gray-500">Vibrate when alarm goes off</p>
            </div>
            <Switch 
              checked={vibrate} 
              onCheckedChange={setVibrate} 
              className="alarm-switch"
              thumbClassName="alarm-switch-thumb"
            />
          </div>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Increasing volume</h2>
              <p className="text-sm text-gray-500">Gradually increase alarm volume</p>
            </div>
            <Switch 
              checked={increasingVolume} 
              onCheckedChange={setIncreasingVolume} 
              className="alarm-switch"
              thumbClassName="alarm-switch-thumb"
            />
          </div>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Snooze</h2>
              <p className="text-sm text-gray-500">Allow snoozing alarms</p>
            </div>
            <Switch 
              checked={snoozeEnabled} 
              onCheckedChange={setSnoozeEnabled} 
              className="alarm-switch"
              thumbClassName="alarm-switch-thumb"
            />
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default SettingsPage;
