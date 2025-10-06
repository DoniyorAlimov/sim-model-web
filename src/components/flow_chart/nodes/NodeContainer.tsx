import { type ReactNode } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import useEditorStore from "../../../store/editorStore";

type Props = {
  nodeId: string;
  className?: string;
  children: ReactNode;
};

const NodeContainer = ({ nodeId, className, children }: Props) => {
  const selectedNodeId = useEditorStore((s) => s.selectedNodeId);
  const edges = useEditorStore((s) => s.edges);
  const removeNode = useEditorStore((s) => s.removeNode);
  const removeEdge = useEditorStore((s) => s.removeEdge);

  const handleOnClick = () => {
    for (const source of edges.filter((edge) => edge.source === nodeId))
      removeEdge(source.id);
    for (const target of edges.filter((edge) => edge.target === nodeId))
      removeEdge(target.id);
    removeNode(nodeId);
  };

  const selectedStyle =
    selectedNodeId === nodeId ? "border rounded-md border-blue-500 " : "";
  const closeIconClass =
    selectedNodeId === nodeId ? "cursor-pointer" : "hidden";

  return (
    <div className={`box-content relative py-2 ${selectedStyle} ${className}`}>
      <div className="absolute right-0 top-0">
        <IoMdCloseCircle
          color="red"
          className={closeIconClass}
          onClick={handleOnClick}
        />
      </div>
      {children}
    </div>
  );
};

export default NodeContainer;
