
import Navigation from "@/components/Navigation";

const HistoryPage = () => {
  return (
    <div className="container max-w-md mx-auto px-4 pb-20">
      <h1 className="text-4xl font-bold my-6">History</h1>
      <div className="text-center py-16">
        <p className="text-gray-500">No alarm history yet</p>
        <p className="text-gray-400 mt-2">Your alarm history will appear here</p>
      </div>
      <Navigation />
    </div>
  );
};

export default HistoryPage;
