import { type Edge, type Node } from "@xyflow/react";
import { flowType, type FlowProps } from "../components/editor/nodes/FlowNode";
import {
  valveType,
  type ValveProps,
} from "../components/editor/nodes/ValveNode";
import {
  vesselType,
  type VesselProps,
} from "../components/editor/nodes/VesselNode";
import { pumpType, type PumpProps } from "../components/editor/nodes/PumpNode";

export const initialNodes: Node[] = [
  {
    id: "Inlet",
    type: flowType,
    data: { tagname: "Inlet", value: 0 } as FlowProps,
    position: { x: 0, y: 0 },
  },
  {
    id: "v4",
    type: valveType,
    data: { tagname: "v4" } as ValveProps,
    position: { x: 250, y: -17 },
  },
  {
    id: "Vessel1",
    type: vesselType,
    data: { tagname: "Vessel1" } as VesselProps,
    position: { x: 500, y: -118 },
  },
  {
    id: "v8",
    type: valveType,
    data: { tagname: "v8" } as ValveProps,
    position: { x: 750, y: -200 },
  },
  {
    id: "Vent",
    type: flowType,
    data: { tagname: "Vent", value: 0 } as FlowProps,
    position: { x: 900, y: -183 },
  },
  {
    id: "v0",
    type: valveType,
    data: { tagname: "v0" } as ValveProps,
    position: { x: 750, y: 200 },
  },
  {
    id: "In_vlv_out",
    type: flowType,
    data: { tagname: "In_vlv_out", value: 0 } as FlowProps,
    position: { x: 900, y: 217 },
  },
  {
    id: "v1",
    type: valveType,
    data: { tagname: "v1" } as ValveProps,
    position: { x: 1150, y: 200 },
  },
  {
    id: "v2",
    type: valveType,
    data: { tagname: "v2" } as ValveProps,
    position: { x: 1150, y: 400 },
  },
  {
    id: "Mid2_in",
    type: flowType,
    data: { tagname: "Mid2_in", value: 0 } as FlowProps,
    position: { x: 1300, y: 217 },
  },
  {
    id: "p2",
    type: pumpType,
    data: { tagname: "p2" } as PumpProps,
    position: { x: 1400, y: 215 },
  },
  {
    id: "Mid2_out",
    type: flowType,
    data: { tagname: "Mid2_out", value: 0 } as FlowProps,
    position: { x: 1600, y: 184 },
  },
  {
    id: "v5",
    type: valveType,
    data: { tagname: "v5" } as ValveProps,
    position: { x: 1750, y: 167 },
  },
  {
    id: "Mid1_in",
    type: flowType,
    data: { tagname: "Mid1_in", value: 0 } as FlowProps,
    position: { x: 1300, y: 417 },
  },
  {
    id: "p1",
    type: pumpType,
    data: { tagname: "p1" } as PumpProps,
    position: { x: 1400, y: 415 },
  },
  {
    id: "Mid1_out",
    type: flowType,
    data: { tagname: "Mid1_out", value: 0 } as FlowProps,
    position: { x: 1600, y: 384 },
  },
  {
    id: "v6",
    type: valveType,
    data: { tagname: "v6" } as ValveProps,
    position: { x: 1750, y: 367 },
  },
  {
    id: "Join",
    type: flowType,
    data: { tagname: "Join", value: 0 } as FlowProps,
    position: { x: 2000, y: 184 },
  },
  {
    id: "v3",
    type: valveType,
    data: { tagname: "v3" } as ValveProps,
    position: { x: 2150, y: 167 },
  },
  {
    id: "Outlet",
    type: flowType,
    data: { tagname: "Outlet", value: 0 } as FlowProps,
    position: { x: 2350, y: 184 },
  },
];

export const initialEdges: Edge[] = [
  { id: "Inlet-v4", source: "Inlet", target: "v4", type: "step" },
  { id: "v4-Vessel1", source: "v4", target: "Vessel1", type: "step" },
  { id: "Vessel1-v8", source: "Vessel1", target: "v8", type: "step" },
  { id: "v8-Vent", source: "v8", target: "Vent", type: "step" },
  { id: "Vessel1-v0", source: "Vessel1", target: "v0", type: "step" },
  { id: "v0-In_vlv_out", source: "v0", target: "In_vlv_out", type: "step" },
  { id: "In_vlv_out-v1", source: "In_vlv_out", target: "v1", type: "step" },
  { id: "v1-Mid2_in", source: "v1", target: "Mid2_in", type: "step" },
  { id: "Mid2_in-p2", source: "Mid2_in", target: "p2", type: "step" },
  { id: "p2-Mid2_out", source: "p2", target: "Mid2_out", type: "step" },
  { id: "Mid2_out-v5", source: "Mid2_out", target: "v5", type: "step" },
  { id: "In_vlv_out-v2", source: "In_vlv_out", target: "v2", type: "step" },
  { id: "v2-Mid1_in", source: "v2", target: "Mid1_in", type: "step" },
  { id: "Mid1_in-p1", source: "Mid1_in", target: "p1", type: "step" },
  { id: "p1-Mid1_out", source: "p1", target: "Mid1_out", type: "step" },
  { id: "Mid1_out-v6", source: "Mid1_out", target: "v6", type: "step" },
  { id: "v5-Join", source: "v5", target: "Join", type: "step" },
  { id: "v6-Join", source: "v6", target: "Join", type: "step" },
  { id: "Join-v3", source: "Join", target: "v3", type: "step" },
  { id: "v3-Outlet", source: "v3", target: "Outlet", type: "step" },
];
