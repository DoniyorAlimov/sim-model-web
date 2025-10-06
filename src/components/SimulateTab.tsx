import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

const SimulateTab = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className=" text-3xl flex gap-2 items-center">
      {isRunning ? (
        <CiPlay1
          onClick={handleClick}
          className="text-green-500 cursor-pointer"
        />
      ) : (
        <CiPause1
          onClick={handleClick}
          className="text-amber-500 cursor-pointer"
        />
      )}
      {isRunning ? <div>Play</div> : <div>Pause</div>}
    </div>
  );
};

export default SimulateTab;
