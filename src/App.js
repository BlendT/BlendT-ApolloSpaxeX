import { Routes, Route, Navigate } from "react-router-dom";
import Notes from "./pages/Notes";
import StarLink15 from "./pages/StarLink15";
import StarLink14 from "./pages/StarLink14";
import Sentinel from "./pages/Sentinel";
import Crew from "./pages/Crew";
import Gps from "./pages/Gps";
import StarLink13 from "./pages/StarLink13";
import StarLink12 from "./pages/StarLink12";
import StarLink11 from "./pages/StarLink11";
import StarLink10 from "./pages/StarLink10";
import Saocom from "./pages/Saocom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />}></Route>
        <Route path="/home" element={<Notes />}></Route>
        <Route path="/starlink15" element={<StarLink15 />}></Route>
        <Route path="/starlink14" element={<StarLink14 />}></Route>
        <Route path="/starlink13" element={<StarLink13 />}></Route>
        <Route path="/starlink12" element={<StarLink12 />}></Route>
        <Route path="/starlink11" element={<StarLink11 />}></Route>
        <Route path="/starlink10" element={<StarLink10 />}></Route>
        <Route path="/sentinel" element={<Sentinel />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/gps" element={<Gps />}></Route>
        <Route path="/saocom" element={<Saocom />}></Route>
      </Routes>
    </div>
  );
}

export default App;
