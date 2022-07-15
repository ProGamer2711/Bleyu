import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import PostsList from "./components/PostsList/PostsList";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/posts" element={<PostsList />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
