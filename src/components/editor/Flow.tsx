import { Background, Controls, ReactFlow, type NodeTypes } from "@xyflow/react";
import useEditorStore from "../../store/editorStore";
import FlowNode from "./nodes/FlowNode";
import ValveNode from "./nodes/ValveNode";
import PumpNode from "./nodes/PumpNode";
import VesselNode from "./nodes/VesselNode";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const nodeTypes: NodeTypes = {
  flowNode: FlowNode,
  valveNode: ValveNode,
  pumpNode: PumpNode,
  vesselNode: VesselNode,
};

const Flow = () => {
  const { nodes, edges, onConnect } = useEditorStore();

  const { data: modelData } = useQuery({
    queryKey: ["models"],
    queryFn: () =>
      axios.get("http://localhost:8000/model/").then((res) => res.data),
    refetchInterval: 1000,
  });

  console.log(modelData);

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
