import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Stage, Layer, Line } from "react-konva";

const socket = io("http://localhost:5000");

// CanvasComponent with only draw mode
const CanvasComponent = ({ color, brushSize }) => {
  const [objects, setObjects] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState(null);
  const stageRef = useRef(null);

  useEffect(() => {
    socket.on("loadCanvas", canvasState => {
      if (canvasState && canvasState.objects) setObjects(canvasState.objects);
    });
    socket.on("canvasUpdate", canvasState => {
      if (canvasState && canvasState.objects) setObjects(canvasState.objects);
    });
    return () => {
      socket.off("loadCanvas");
      socket.off("canvasUpdate");
    };
  }, []);

  const handleMouseDown = e => {
    const pos = e.target.getStage().getPointerPosition();
    setIsDrawing(true);
    setCurrentLine({
      id: Date.now(),
      type: "line",
      points: [pos.x, pos.y],
      stroke: color,
      strokeWidth: brushSize,
    });
  };

  const handleMouseMove = e => {
    if (!isDrawing) return;
    const pos = e.target.getStage().getPointerPosition();
    setCurrentLine(prev => ({
      ...prev,
      points: [...prev.points, pos.x, pos.y],
    }));
  };

  const handleMouseUp = () => {
    if (isDrawing && currentLine) {
      setObjects(prev => [...prev, currentLine]);
      socket.emit("canvasUpdate", { objects: [...objects, currentLine] });
      setCurrentLine(null);
      setIsDrawing(false);
    }
  };

  const renderObject = obj => {
    if (obj.type === "line") {
      return (
        <Line
          key={obj.id}
          points={obj.points}
          stroke={obj.stroke}
          strokeWidth={obj.strokeWidth}
          tension={0.5}
          lineCap="round"
          lineJoin="round"
        />
      );
    }
    return null;
  };

  return (
    <div className="flex-1 relative">
      <Stage
        width={window.innerWidth - 256}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
        className="border border-gray-300 shadow-lg"
      >
        <Layer>
          {objects.map(obj => renderObject(obj))}
          {currentLine && (
            <Line
              points={currentLine.points}
              stroke={currentLine.stroke}
              strokeWidth={currentLine.strokeWidth}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

// New LiveNotes component
const LiveNotes = ({ comments, setComments }) => {
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    socket.on("addComment", comment => setComments(prev => [...prev, comment]));
    return () => {
      socket.off("addComment");
    };
  }, [setComments]);

  const addNote = () => {
    if (newNote) {
      const note = { id: Date.now(), text: newNote, timestamp: new Date().toISOString() };
      socket.emit("addComment", note);
      setNewNote("");
    }
  };

  return (
    <div className="w-64 h-full bg-white p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-black">Live Notes</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
          placeholder="Add a note..."
          onKeyPress={e => e.key === "Enter" && addNote()}
          className="w-full border p-1 rounded text-black"
        />
        <button onClick={addNote} className="mt-2 w-full bg-blue-500 text-white px-2 py-1 rounded">
          Add Note
        </button>
      </div>
      <ul className="space-y-2">
        {comments.map(c => (
          <li key={c.id} className="text-sm text-black border-b pb-2">
            {c.text}
            <span className="block text-gray-500 text-xs">
              {new Date(c.timestamp).toLocaleTimeString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage in a parent component
const App = () => {
  const [comments, setComments] = useState([]);
  return (
    <div className="flex">
      <CanvasComponent color="#000000" brushSize={5} />
      <LiveNotes comments={comments} setComments={setComments} />
    </div>
  );
};

export { CanvasComponent, LiveNotes };
