import { Background, Controls, ReactFlow, type NodeTypes } from "@xyflow/react";
import useEditorStore from "../../store/editorStore";
import FlowNode from "./nodes/FlowNode";
import PumpNode from "./nodes/PumpNode";
import ValveNode from "./nodes/ValveNode";
import VesselNode from "./nodes/VesselNode";
import useSyncModelData from "../hooks/useSyncModelData";

const nodeTypes: NodeTypes = {
  flowNode: FlowNode,
  valveNode: ValveNode,
  pumpNode: PumpNode,
  vesselNode: VesselNode,
};

const Flow = () => {
  const { nodes, edges, onConnect } = useEditorStore();
  useSyncModelData();

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
