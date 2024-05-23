import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Review from "./pages/Review";
import Signin from "./pages/Signin";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import Complaints from "./pages/Complaints";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='signin' element={<Signin />} />
				<Route element={<Layout />}>
					<Route path='dashboard' element={<Home />} />
					<Route path='task/*' element={<Task />} />
					<Route path='departments/:pathId' element={<Department />} />
					<Route path='analytics' element={<Analytics />} />
					<Route path='settings' element={<Settings />} />
					<Route path='review/*' element={<Review />} />
					<Route path='complaints' element={<Complaints />} />
					<Route path='*' element={<Error />} /> {/* Error route */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
