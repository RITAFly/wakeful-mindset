
import Navigation from "@/components/Navigation";

const TasksPage = () => {
  return (
    <div className="container max-w-md mx-auto px-4 pb-20">
      <h1 className="text-4xl font-bold my-6">Tasks</h1>
      <div className="space-y-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Photo Task</h2>
          <p className="text-gray-600">Take a photo of a specific location to dismiss the alarm.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Math Task</h2>
          <p className="text-gray-600">Solve math problems to wake up your brain and dismiss the alarm.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Shake Task</h2>
          <p className="text-gray-600">Shake your phone vigorously to dismiss the alarm.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Slide Unlock</h2>
          <p className="text-gray-600">Slide to unlock pattern to dismiss the alarm.</p>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default TasksPage;
