import { useMutation, useQuery } from "@tanstack/react-query";
import { PiFireExtinguisherFill } from "react-icons/pi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaFire } from "react-icons/fa6";
import axios from "axios";
import { GiLeak } from "react-icons/gi";
import { toast } from "react-toastify";

const ScenarioTab = () => {
  const { data: isLeakOn } = useQuery({
    queryKey: ["leak"],
    queryFn: () =>
      axios
        .get("http://localhost:8000/scenario/status")
        .then((res) => res.data)
        .then((data) => data.leak as boolean),
    refetchInterval: 1000,
  });

  const { data: isFireOn } = useQuery({
    queryKey: ["fire"],
    queryFn: () =>
      axios
        .get("http://localhost:8000/scenario/fire_status")
        .then((res) => res.data)
        .then((data) => data.fire as boolean),
    refetchInterval: 1000,
  });

  const startLeak = useMutation({
    mutationFn: () => axios.post("http://localhost:8000/scenario/leak"),
    onSuccess: () => toast.warn("Leak was trigerred"),
  });

  const pushFireButton = useMutation({
    mutationFn: () => axios.post("http://localhost:8000/scenario/fire_button"),
    onSuccess: () => toast.info("Fire button pressed"),
  });

  const onReportClick = () => {
    const source = new EventSource("http://localhost:8000/score");

    const id = toast.loading("Generating report...");

    let fullText = "";

    source.onmessage = (e) => {
      if (e.data === "[DONE]") {
        source.close();
        return;
      }
      fullText += e.data;

      toast.update(id, {
        render: fullText,
        type: "success",
        isLoading: false,
        autoClose: false,
        closeButton: true,
        position: "top-right",
      });
    };

    source.onerror = (err) => {
      toast.update(id, {
        render: "Stream error: " + err,
        type: "error",
        isLoading: false,
      });
      source.close();
    };
  };

  return (
    <div className="text-3xl flex gap-3 items-center">
      <div>Scenarios</div>
      <div className="flex flex-col gap-1">
        <div
          onClick={() => startLeak.mutate()}
          className={
            "flex gap-2 text-sm py-0.5 px-1 border border-sm rounded-sm cursor-pointer"
          }
        >
          <GiLeak className={isLeakOn ? "text-yellow-500" : "text-gray-700"} />
          <div>Start leak</div>
        </div>
        <div className="flex gap-2 text-sm py-0.5 px-1 border border-sm rounded-sm cursor-pointer">
          <FaFire className={isFireOn ? "text-red-600" : "text-gray-700"} />
          <div>Fire</div>
        </div>
      </div>
      <div
        onClick={() => pushFireButton.mutate()}
        className="flex gap-1 items-center text-xl border rounded-sm self-stretch px-1 cursor-pointer hover:bg-gray-700"
      >
        <PiFireExtinguisherFill className="text-red-500" />
        <div>Push</div>
      </div>
      <div
        onClick={() => onReportClick()}
        className="flex gap-1 items-center text-xl border rounded-sm self-stretch px-1 cursor-pointer hover:bg-gray-700"
      >
        <HiOutlineDocumentReport />
        <div>Report</div>
      </div>
    </div>
  );
};

export default ScenarioTab;
