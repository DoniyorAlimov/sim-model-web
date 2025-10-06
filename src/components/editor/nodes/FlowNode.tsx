import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import FlowIcon from "../icons/FlowIcon";
import NodeContainer from "./NodeContainer";
import useModelStore from "../../../store/modelStore";
import { useEffect, useState } from "react";

export type FlowType = "flowNode";
export const flowType: FlowType = "flowNode";

export type FlowProps = {
  tagname: string;
};

export type FlowNode = Node<FlowProps, FlowType>;

const FlowNode = ({ data: { tagname } }: NodeProps<FlowNode>) => {
  const [value, setValue] = useState(0);
  const simData = useModelStore((s) => s.simData);

  useEffect(() => {
    if (simData) {
      const data = simData[tagname];
      setValue(data!);
    }
  }, [simData]);

  return (
    <NodeContainer nodeId={tagname} className="w-9">
      <div className="mb-2 ">
        <div className="text-blue-500 overflow-y-visible">{tagname}</div>
        <div className="">{value ? value?.toFixed(2) : "NaN"}</div>
      </div>
      <FlowIcon color="green" />
      <Handle type="target" position={Position.Left} style={{ top: "82%" }} />
      <Handle type="source" position={Position.Right} style={{ top: "82%" }} />
    </NodeContainer>
  );
};

export default FlowNode;
