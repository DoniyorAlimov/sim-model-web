import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import FlowIcon from "../icons/FlowIcon";
import NodeContainer from "./NodeContainer";

export type FlowType = "flowNode";
export const flowType: FlowType = "flowNode";

export type FlowProps = {
  tagname: string;
  value: number | null;
};

export type FlowNode = Node<FlowProps, FlowType>;

const FlowNode = ({ data: { tagname, value } }: NodeProps<FlowNode>) => {
  return (
    <NodeContainer nodeId={tagname} className="w-9">
      <div className="mb-2 ">
        <div className="text-blue-500 overflow-y-visible">{tagname}</div>
        <div className="">{value?.toFixed(2)}</div>
      </div>
      <FlowIcon color="green" />
      <Handle type="target" position={Position.Left} style={{ top: "82%" }} />
      <Handle type="source" position={Position.Right} style={{ top: "82%" }} />
    </NodeContainer>
  );
};

export default FlowNode;
