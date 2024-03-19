import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import Signin from "./pages/Signin";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import OngoingTask from "./pages/OngoingTask";
import TaskReview from "./pages/TaskReview";
import TaskHistory from "./pages/TaskHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="departments" element={<Departments />}>
            <Route path="ongoing-task" element={<OngoingTask />} />
            <Route path="task-review" element={<TaskReview />} />
            <Route path="task-history" element={<TaskHistory />} />
          </Route>
          <Route path="departments/:pathId" element={<Department />} />

          <Route path="analytics" element={<Analytics />} />
          <Route path="goals" element={<Goals />} />
          <Route path="setting" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
