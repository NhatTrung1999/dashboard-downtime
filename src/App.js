// import { Dashboard } from "./components/Dashboard";

import Screen from "./Screen";

// import { MachineHistory } from "./components/MachineHistory";

// import { MaintenanceQueue } from "./components/MaintenanceQueue";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/screen/*" element={<Screen />} />
      </Routes>
    </>
  );
}

export default App;
