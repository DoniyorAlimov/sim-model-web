import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { toast } from "react-toastify";

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
  const resetSimulation = useMutation({
    mutationFn: () => axios.post("http://localhost:8000/init"),
    onSuccess: () => {
      toast.success("Model reinitialized");
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return (
    <div className="flex gap-2 items-center text-3xl">
      <div className="w-28  flex gap-2 items-center">
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
      <div className="flex border-l pl-2 gap-2 items-center">
        <GrPowerReset
          onClick={() => resetSimulation.mutate()}
          className="text-red-500 cursor-pointer"
        />
        <div>Reset</div>
      </div>
    </div>
  );
};

export default SimulateTab;
