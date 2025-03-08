// SidebarComponent.jsx
const SidebarComponent = ({ color, setColor, brushSize, setBrushSize }) => {
  const getAISuggestion = async () => {
    const response = await fetch("http://localhost:5000/api/suggestion");
    const { suggestion } = await response.json();
    alert(`AI Suggestion: ${suggestion}`);
  };

  return (
    <div className="w-64 bg-gray-200 p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Hackniche Tools</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Color</label>
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Brush Size</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={e => setBrushSize(e.target.value)}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{brushSize}px</span>
        </div>
        <button onClick={getAISuggestion} className="w-full bg-blue-500 text-white p-2 rounded">
          AI Suggestion
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;
