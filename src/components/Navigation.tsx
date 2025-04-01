
import { AlarmClock, Clock, Check, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 z-50">
      <NavLink to="/" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`} end>
        <AlarmClock className="h-6 w-6 mb-1" />
        <span>Alarms</span>
      </NavLink>
      <NavLink to="/history" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`}>
        <Clock className="h-6 w-6 mb-1" />
        <span>History</span>
      </NavLink>
      <NavLink to="/tasks" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`}>
        <Check className="h-6 w-6 mb-1" />
        <span>Tasks</span>
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => `nav-icon ${isActive ? "active" : ""}`}>
        <Settings className="h-6 w-6 mb-1" />
        <span>Settings</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
