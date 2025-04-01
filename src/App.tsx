
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlarmProvider } from "@/context/AlarmContext";

// Pages
import AlarmsPage from "@/pages/AlarmsPage";
import CreateAlarmPage from "@/pages/CreateAlarmPage";
import EditAlarmPage from "@/pages/EditAlarmPage";
import HistoryPage from "@/pages/HistoryPage";
import TasksPage from "@/pages/TasksPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AlarmProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AlarmsPage />} />
            <Route path="/create-alarm" element={<CreateAlarmPage />} />
            <Route path="/edit-alarm/:id" element={<EditAlarmPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AlarmProvider>
  </QueryClientProvider>
);

export default App;
