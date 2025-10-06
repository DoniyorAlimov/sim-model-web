import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import useModelStore, {
  type SimulationData,
  type ModelData,
} from "../../store/modelStore";

const useSyncModelData = () => {
  const setModelData = useModelStore((s) => s.setModelData);
  const setSimData = useModelStore((s) => s.setSimData);

  const { data: modelData } = useQuery({
    queryKey: ["models"],
    queryFn: () =>
      axios
        .get<ModelData>("http://localhost:8000/model/")
        .then((res) => res.data),
    refetchInterval: 1000,
  });

  const { data: simData } = useQuery({
    queryKey: ["simulations"],
    queryFn: () =>
      axios
        .get<SimulationData>("http://localhost:8000/sim/")
        .then((res) => res.data),
    refetchInterval: 1000,
  });

  useEffect(() => {
    setModelData(modelData!);
    setSimData(simData!);
  }, [modelData, setModelData, simData, setSimData]);
};

export default useSyncModelData;
