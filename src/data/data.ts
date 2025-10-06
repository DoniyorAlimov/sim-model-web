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
    id: "V4",
    type: valveType,
    data: { tagname: "V4" } as ValveProps,
    position: { x: 250, y: -17 },
  },
  {
    id: "Vessel1",
    type: vesselType,
    data: { tagname: "Vessel1" } as VesselProps,
    position: { x: 500, y: -118 },
  },
  {
    id: "V8",
    type: valveType,
    data: { tagname: "V8" } as ValveProps,
    position: { x: 750, y: -200 },
  },
  {
    id: "Vent",
    type: flowType,
    data: { tagname: "Vent", value: 0 } as FlowProps,
    position: { x: 900, y: -183 },
  },
  {
    id: "V0",
    type: valveType,
    data: { tagname: "V0" } as ValveProps,
    position: { x: 750, y: 200 },
  },
  {
    id: "In_vlv_out",
    type: flowType,
    data: { tagname: "In_vlv_out", value: 0 } as FlowProps,
    position: { x: 900, y: 217 },
  },
  {
    id: "V1",
    type: valveType,
    data: { tagname: "V1" } as ValveProps,
    position: { x: 1150, y: 200 },
  },
  {
    id: "V2",
    type: valveType,
    data: { tagname: "V2" } as ValveProps,
    position: { x: 1150, y: 400 },
  },
  {
    id: "Mid2_in",
    type: flowType,
    data: { tagname: "Mid2_in", value: 0 } as FlowProps,
    position: { x: 1300, y: 217 },
  },
  {
    id: "P2",
    type: pumpType,
    data: { tagname: "P2" } as PumpProps,
    position: { x: 1400, y: 215 },
  },
  {
    id: "Mid2_out",
    type: flowType,
    data: { tagname: "Mid2_out", value: 0 } as FlowProps,
    position: { x: 1600, y: 184 },
  },
  {
    id: "V5",
    type: valveType,
    data: { tagname: "V5" } as ValveProps,
    position: { x: 1750, y: 167 },
  },
  {
    id: "Mid1_in",
    type: flowType,
    data: { tagname: "Mid1_in", value: 0 } as FlowProps,
    position: { x: 1300, y: 417 },
  },
  {
    id: "P1",
    type: pumpType,
    data: { tagname: "P1" } as PumpProps,
    position: { x: 1400, y: 415 },
  },
  {
    id: "Mid1_out",
    type: flowType,
    data: { tagname: "Mid1_out", value: 0 } as FlowProps,
    position: { x: 1600, y: 384 },
  },
  {
    id: "V6",
    type: valveType,
    data: { tagname: "V6" } as ValveProps,
    position: { x: 1750, y: 367 },
  },
  {
    id: "Join",
    type: flowType,
    data: { tagname: "Join", value: 0 } as FlowProps,
    position: { x: 2000, y: 184 },
  },
  {
    id: "V3",
    type: valveType,
    data: { tagname: "V3" } as ValveProps,
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
  { id: "Inlet-V4", source: "Inlet", target: "V4", type: "step" },
  { id: "V4-Vessel1", source: "V4", target: "Vessel1", type: "step" },
  { id: "Vessel1-V8", source: "Vessel1", target: "V8", type: "step" },
  { id: "V8-Vent", source: "V8", target: "Vent", type: "step" },
  { id: "Vessel1-V0", source: "Vessel1", target: "V0", type: "step" },
  { id: "V0-In_vlv_out", source: "V0", target: "In_vlv_out", type: "step" },
  { id: "In_vlv_out-V1", source: "In_vlv_out", target: "V1", type: "step" },
  { id: "V1-Mid2_in", source: "V1", target: "Mid2_in", type: "step" },
  { id: "Mid2_in-P2", source: "Mid2_in", target: "P2", type: "step" },
  { id: "P2-Mid2_out", source: "P2", target: "Mid2_out", type: "step" },
  { id: "Mid2_out-V5", source: "Mid2_out", target: "V5", type: "step" },
  { id: "In_vlv_out-V2", source: "In_vlv_out", target: "V2", type: "step" },
  { id: "V2-Mid1_in", source: "V2", target: "Mid1_in", type: "step" },
  { id: "Mid1_in-P1", source: "Mid1_in", target: "P1", type: "step" },
  { id: "P1-Mid1_out", source: "P1", target: "Mid1_out", type: "step" },
  { id: "Mid1_out-V6", source: "Mid1_out", target: "V6", type: "step" },
  { id: "V5-Join", source: "V5", target: "Join", type: "step" },
  { id: "V6-Join", source: "V6", target: "Join", type: "step" },
  { id: "Join-V3", source: "Join", target: "V3", type: "step" },
  { id: "V3-Outlet", source: "V3", target: "Outlet", type: "step" },
];
