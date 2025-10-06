import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CiPause1, CiPlay1 } from "react-icons/ci";

const SimulateTab = () => {
  const queryKey = "status";
  const queryClient = useQueryClient();

  const { data: isRunning } = useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      axios.get("http://localhost:8000/status").then((res) => res.data),
  });

  const startSimulation = useMutation({
    mutationFn: () => axios.post("http://localhost:8000/start"),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
  });
  const stopSimulation = useMutation({
    mutationFn: () => axios.post("http://localhost:8000/stop"),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
  });

  return (
    <div className=" text-3xl flex gap-2 items-center">
      {isRunning ? (
        <CiPause1
          onClick={() => stopSimulation.mutate()}
          className="text-amber-500 cursor-pointer"
        />
      ) : (
        <CiPlay1
          onClick={() => startSimulation.mutate()}
          className="text-green-500 cursor-pointer"
        />
      )}
      {isRunning ? <div>Pause</div> : <div>Play</div>}
    </div>
  );
};

export default SimulateTab;
