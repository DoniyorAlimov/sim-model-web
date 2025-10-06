import { Handle, type Node, type NodeProps, Position } from '@xyflow/react';
import PumpIcon from '../icons/PumpIcon';
import NodeContainer from './NodeContainer';

export type PumpType = 'pumpNode';
export const pumpType: PumpType = 'pumpNode';

export type PumpProps = {
  tagname: string;
};

export type PumpNode = Node<PumpProps, PumpType>;
const PumpNode = ({ data: { tagname } }: NodeProps<PumpNode>) => {
  return (
    <NodeContainer nodeId={tagname} className="text-center w-24">
      <div className="text-blue-500">{tagname}</div>
      <PumpIcon color="gray" statusColor="red" />
      <div className="flex justify-center gap-2 mt-2">
        <button
          onClick={() => console.log('Run')}
          className="px-1 border rounded-sm bg-green-400 font-bold cursor-pointer"
        >
          R
        </button>
        <button
          onClick={() => console.log('Stop')}
          className="px-1 border rounded-sm bg-red-400 font-bold cursor-pointer"
        >
          S
        </button>
      </div>
      <Handle type="target" position={Position.Left} style={{ top: '45%' }} />
      <Handle
        type="source"
        position={Position.Right}
        style={{ top: '24.5%' }}
      />
    </NodeContainer>
  );
};

export default PumpNode;
