import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import VesselIcon from "../icons/VesselIcon";
import NodeContainer from "./NodeContainer";
import useModelStore, { type Vessel } from "../../../store/modelStore";
import { useEffect, useState } from "react";

export type VesselType = "vesselNode";
export const vesselType: VesselType = "vesselNode";

export type VesselProps = {
  tagname: string;
};

export type VesselNode = Node<VesselProps, VesselType>;

const VesselNode = ({ data: { tagname } }: NodeProps<VesselNode>) => {
  const [PV, setPV] = useState(0);
  const modelData = useModelStore((s) => s.modelData);

  useEffect(() => {
    if (modelData) {
      const data = modelData[tagname] as Vessel;
      setPV(data.v_liquid);
    }
  }, [modelData]);

  return (
    <NodeContainer nodeId={tagname} className="text-center w-36 h-82">
      <div className="text-blue-500 mb-2">{tagname}</div>
      <VesselIcon color="gray" level={PV} />
      <div className="w-20 flex gap-2 justify-between fixed top-1/3 left-2 bg-gray-300 px-1 rounded-sm">
        <label htmlFor="pv">PV: </label>
        <input
          id="pv"
          disabled
          value={PV.toFixed(2)}
          min={0}
          max={100}
          className="w-full text-right"
        />
      </div>
      <Handle type="target" position={Position.Left} style={{ top: "55%" }} />
      <Handle type="source" position={Position.Right} style={{ top: "55%" }} />
    </NodeContainer>
  );
};

export default VesselNode;
