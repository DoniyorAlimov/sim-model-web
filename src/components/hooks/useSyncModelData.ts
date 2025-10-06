import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import useModelStore, { type ModelData } from "../../store/modelStore";

const useSyncModelData = () => {
  const setModelData = useModelStore((s) => s.setModelData);

  const { data: modelData } = useQuery({
    queryKey: ["models"],
    queryFn: () =>
      axios
        .get<ModelData>("http://localhost:8000/model/")
        .then((res) => res.data),
    refetchInterval: 1000,
  });

  useEffect(() => {
    setModelData(modelData!);
  }, [modelData, setModelData]);
};

export default useSyncModelData;
