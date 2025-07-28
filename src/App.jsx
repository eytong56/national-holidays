import Dropdown from "./Dropdown.jsx";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex min-h-full w-1/2 min-w-lg flex-col items-center justify-center px-6 py-12 gap-y-4">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900space-y-8">National Holidays</h1>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
