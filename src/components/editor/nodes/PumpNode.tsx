import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import PumpIcon from "../icons/PumpIcon";
import NodeContainer from "./NodeContainer";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import useModelStore, { type Pump } from "../../../store/modelStore";
import { useEffect, useState } from "react";

export type PumpType = "pumpNode";
export const pumpType: PumpType = "pumpNode";

export type PumpProps = {
  tagname: string;
};

export type PumpNode = Node<PumpProps, PumpType>;
const PumpNode = ({ data: { tagname } }: NodeProps<PumpNode>) => {
  const [isRunning, setIsRunning] = useState(false);
  const modelData = useModelStore((s) => s.modelData);

  const startPump = useMutation({
    mutationFn: () =>
      axios.post("http://localhost:8000/model/" + tagname, {
        attribute: "start",
        value: 0,
      }),
    onSuccess: () => toast.success("Pump started"),
  });

  const stopPump = useMutation({
    mutationFn: () =>
      axios.post("http://localhost:8000/model/" + tagname, {
        attribute: "stop",
        value: 0,
      }),
    onSuccess: () => toast.success("Pump stopped"),
  });

  useEffect(() => {
    if (modelData) {
      const data = modelData[tagname] as Pump;
      setIsRunning(data.pv > 0.05);
    }
  }, [modelData]);

  return (
    <NodeContainer nodeId={tagname} className="text-center w-24">
      <div className="text-blue-500">{tagname}</div>
      <PumpIcon color="gray" statusColor={isRunning ? "green" : "red"} />
      <div className="flex justify-center gap-2 mt-2">
        <button
          onClick={() => startPump.mutate()}
          className="px-1 border rounded-sm bg-green-400 font-bold cursor-pointer"
        >
          R
        </button>
        <button
          onClick={() => stopPump.mutate()}
          className="px-1 border rounded-sm bg-red-400 font-bold cursor-pointer"
        >
          S
        </button>
      </div>
      <Handle type="target" position={Position.Left} style={{ top: "45%" }} />
      <Handle
        type="source"
        position={Position.Right}
        style={{ top: "24.5%" }}
      />
    </NodeContainer>
  );
};

export default PumpNode;
