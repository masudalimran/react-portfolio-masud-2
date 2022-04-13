import { Routes, Route } from "react-router-dom";
import AdminPanel from "./screens/Admin/AdminPanel";
import SignIn from "./screens/Admin/SignIn";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="admin">
          <Route index element={<SignIn />} />
          <Route path="dashboard" element={<AdminPanel />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
