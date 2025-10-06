import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import ValveIcon from "../icons/ValveIcon";
import NodeContainer from "./NodeContainer";
import useModelStore, { type Valve } from "../../../store/modelStore";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export type ValveType = "valveNode";
export const valveType: ValveType = "valveNode";

export type ValveProps = {
  tagname: string;
};

export type ValveNode = Node<ValveProps, ValveType>;

const ValveNode = ({ data: { tagname } }: NodeProps<ValveNode>) => {
  const [PV, setPV] = useState(0);
  const [OP, setOP] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const modelData = useModelStore((s) => s.modelData);

  const sendOP = useMutation({
    mutationFn: (value: number) =>
      axios.post("http://localhost:8000/model/" + tagname, {
        attribute: "set_op",
        value,
      }),
    onSuccess: () => toast.success("OP changed!"),
  });

  useEffect(() => {
    if (modelData) {
      const data = modelData[tagname] as Valve;
      setPV(data.pv * 100);

      if (!isEditing) setOP(data.op * 100);
    }
  }, [modelData]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (/^\d*$/.test(value)) {
      setOP(Number(value));
    }
  };

  const onFocus = () => setIsEditing(true);
  const onBlur = () => setIsEditing(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const value = e.currentTarget.value;
      if (Number.isNaN(value)) return;
      sendOP.mutate(Number(value));
    }
  };

  return (
    <NodeContainer nodeId={tagname} className="text-center">
      <div className="text-blue-500 mb-2">{tagname}</div>
      <ValveIcon color="gray" />
      <div className="w-16 flex gap-2 justify-between">
        <label htmlFor="pv">PV: </label>
        <input
          id="pv"
          disabled
          value={PV!.toFixed(0)}
          className="w-full text-right text-blue-500"
        />
      </div>
      <div className="w-16 flex gap-2 justify-between">
        <label htmlFor="op">OP: </label>
        <input
          id="op"
          value={OP}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          min={0}
          max={100}
          inputMode="numeric"
          className="w-full text-right focus:border rounded-sm"
        />
      </div>
      <Handle type="target" position={Position.Left} style={{ top: "55%" }} />
      <Handle type="source" position={Position.Right} style={{ top: "55%" }} />
    </NodeContainer>
  );
};

export default ValveNode;
