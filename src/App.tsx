import Flow from "./components/editor/Flow";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Flow />
      </div>
    </div>
  );
};

export default App;
