import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import ValveIcon from '../icons/ValveIcon';
import NodeContainer from './NodeContainer';

export type ValveType = 'valveNode';
export const valveType: ValveType = 'valveNode';

export type ValveProps = {
  tagname: string;
  pv: number | null;
  op: number | null;
};

export type ValveNode = Node<ValveProps, ValveType>;

const ValveNode = ({ data: { tagname, pv, op } }: NodeProps<ValveNode>) => {
  return (
    <NodeContainer nodeId={tagname} className="text-center">
      <div className="text-blue-500 mb-2">{tagname}</div>
      <ValveIcon color="gray" />
      <div className="w-16 flex gap-2 justify-between">
        <label htmlFor="pv">PV: </label>
        <input
          id="pv"
          disabled
          value={pv!}
          className="w-full text-right text-blue-500"
        />
      </div>
      <div className="w-16 flex gap-2 justify-between">
        <label htmlFor="op">OP: </label>
        <input
          id="op"
          defaultValue={op!}
          min={0}
          max={100}
          className="w-full text-right focus:border rounded-sm"
        />
      </div>
      <Handle type="target" position={Position.Left} style={{ top: '55%' }} />
      <Handle type="source" position={Position.Right} style={{ top: '55%' }} />
    </NodeContainer>
  );
};

export default ValveNode;
