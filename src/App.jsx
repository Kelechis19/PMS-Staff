import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Report from "./pages/Report";
import Signin from "./pages/Signin";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import OngoingTask from "./pages/OngoingTask";
import TaskReview from "./pages/TaskReview";
import TaskHistory from "./pages/TaskHistory";
import Complaints from "./components/Complaints";
import Evaluation from "./components/Evaluation";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="signin" element={<Signin />} />
				<Route path="dashboard" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="task" element={<Task />}>
						<Route path="ongoing-task" element={<OngoingTask />} />

						<Route path="task-review" element={<TaskReview />} />
						<Route path="task-history" element={<TaskHistory />} />
					</Route>
					<Route path="departments/:pathId" element={<Department />} />

					<Route path="analytics" element={<Analytics />} />
					<Route path="reports" element={<Report />}>
						<Route path="complaints" element={<Complaints />} />
						<Route path="evaluation" element={<Evaluation />} />
					</Route>
					<Route path="settings" element={<Settings />} />
					<Route path="*" element={<Error />} />

					<Route path="OngoingTasks" element={<OngoingTask />}></Route>
					<Route path="TaskHistory" element={<TaskHistory />}></Route>
					<Route path="TaskReview" element={<TaskReview />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
