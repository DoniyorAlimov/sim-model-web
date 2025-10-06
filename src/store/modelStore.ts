import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export type Valve = {
  tag: string;
  cv_max: number;
  stroke_time: number;
  op: number;
  pv: number;
  cv: number;
};

export type Pump = {
  tag: string;
  head_rated: number;
  flow_rated: number;
  op: number;
  pv: number;
  stroke_time: number;
  cv_bypass: number;
};

export type Vessel = {
  tag: string;
  diameter: number;
  height: number;
  v_total: number;
  v_liquid: number;
  p_gas: number;
  p_gas_setpoint: number;
  v_gas: number;
  q_gas: number;
  p_total: number;
  rho_switch_height: number;
  _last_q_in_hint: number;
};

type ModelItem = Valve | Pump | Vessel;

export type ModelData = Record<string, ModelItem>;

type ModelStore = {
  modelData: ModelData | null;
  setModelData: (modelData: ModelData) => void;
};

const useModelStore = create<ModelStore>((set) => ({
  modelData: null,
  setModelData: (modelData) => set({ modelData }),
}));

if (import.meta.env.MODE === "development")
  mountStoreDevtool("Model Store", useModelStore);

export default useModelStore;
