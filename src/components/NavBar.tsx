import ScenarioTab from "./ScenarioTab";
import SimulateTab from "./SimulateTab";

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white py-5 px-3 flex items-center justify-between">
      <SimulateTab />
      <ScenarioTab />
    </div>
  );
};

export default NavBar;
