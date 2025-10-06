import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type Node,
  type OnEdgesChange,
  type OnNodesChange,
} from "@xyflow/react";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { initialEdges, initialNodes } from "../data/data";

type EditorStore = {
  selectedNodeId: string | null;
  nodes: Node[];
  edges: Edge[];
  setSelectedNodeId: (node: string) => void;
  onNodesChange: OnNodesChange<Node>;
  onEdgesChange: OnEdgesChange;
  onConnect: (connection: Edge | Connection) => void;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  removeEdge: (edge: string) => void;
  removeNode: (node: string) => void;
};

const useEditorStore = create<EditorStore>((set, get) => ({
  selectedNodeId: null,
  nodes: initialNodes,
  edges: initialEdges,
  setSelectedNodeId: (node) => set({ selectedNodeId: node }),
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes: [...get().nodes, ...nodes] });
  },
  setEdges: (edges) => {
    set({ edges: [...get().edges, ...edges] });
  },
  removeEdge: (id) => {
    set({ edges: get().edges.filter((edge) => edge.id !== id) });
  },
  removeNode: (id) => {
    set({ nodes: get().nodes.filter((node) => node.id !== id) });
  },
}));

if (import.meta.env.MODE === "development")
  mountStoreDevtool("Editor Store", useEditorStore);

export default useEditorStore;
