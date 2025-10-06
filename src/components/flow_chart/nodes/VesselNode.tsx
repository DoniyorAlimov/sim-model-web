import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import VesselIcon from '../icons/VesselIcon';
import NodeContainer from './NodeContainer';

export type VesselType = 'vesselNode';
export const vesselType: VesselType = 'vesselNode';

export type VesselProps = {
  tagname: string;
  pv: number | null;
};

export type VesselNode = Node<VesselProps, VesselType>;

const VesselNode = ({ data: { tagname, pv } }: NodeProps<VesselNode>) => {
  return (
    <NodeContainer nodeId={tagname} className="text-center w-36 h-82">
      <div className="text-blue-500 mb-2">{tagname}</div>
      <VesselIcon color="gray" level={pv!} />
      <div className="w-16 flex gap-2 justify-between fixed top-1/3 left-5 bg-gray-300 px-1 rounded-sm">
        <label htmlFor="pv">PV: </label>
        <input
          id="pv"
          disabled
          defaultValue={pv!}
          min={0}
          max={100}
          className="w-full text-right"
        />
      </div>
      <Handle type="target" position={Position.Left} style={{ top: '55%' }} />
      <Handle type="source" position={Position.Right} style={{ top: '55%' }} />
    </NodeContainer>
  );
};

export default VesselNode;
