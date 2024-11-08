import HoverBoxExample from "./examples/HoverBoxExample";

function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-neutral-100 px-8 py-24">
      <div className="w-full max-w-xl space-y-6">
        <HoverBoxExample />
      </div>
    </div>
  );
}

export default App;
