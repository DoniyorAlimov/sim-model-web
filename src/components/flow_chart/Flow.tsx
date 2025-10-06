import { Background, Controls, ReactFlow, type NodeTypes } from "@xyflow/react";
import useEditorStore from "../../store/editorStore";
import FlowNode from "./nodes/FlowNode";
import ValveNode from "./nodes/ValveNode";
import PumpNode from "./nodes/PumpNode";
import VesselNode from "./nodes/VesselNode";

const nodeTypes: NodeTypes = {
  flowNode: FlowNode,
  valveNode: ValveNode,
  pumpNode: PumpNode,
  vesselNode: VesselNode,
};

const Flow = () => {
  const { nodes, edges, onConnect } = useEditorStore();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
