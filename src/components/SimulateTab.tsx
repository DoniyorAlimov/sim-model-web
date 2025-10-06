import axios from "axios";
import { useEffect, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

const SimulateTab = () => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/status")
      .then((res) => res.data)
      .then((status) => setIsRunning(status));
  }, []);

  const handleStart = () => {
    axios.post("http://localhost:8000/start").then(() => setIsRunning(true));
  };

  const handleStop = () => {
    axios.post("http://localhost:8000/stop").then(() => setIsRunning(false));
  };

  return (
    <div className=" text-3xl flex gap-2 items-center">
      {isRunning ? (
        <CiPause1
          onClick={handleStop}
          className="text-amber-500 cursor-pointer"
        />
      ) : (
        <CiPlay1
          onClick={handleStart}
          className="text-green-500 cursor-pointer"
        />
      )}
      {isRunning ? <div>Pause</div> : <div>Play</div>}
    </div>
  );
};

export default SimulateTab;
