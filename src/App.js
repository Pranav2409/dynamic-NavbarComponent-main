import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Albumscomp from "./components/Albumscomp";
import PostsComp from "./components/PostsComp";
import CommentsComp from "./components/CommentsComp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	return (
		<>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/" >
							Home
						</NavLink>
					</div>
          <div style={{ margin: '10px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/albums" >
							Albums
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/posts" >
							Posts
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/comments" >
							Comments
						</NavLink>
					</div>
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
          <Route exact path="/albums" element={<Albumscomp/>} />
					<Route exact path="/posts" element={<PostsComp/>} />
					<Route exact path="/comments" element={<CommentsComp/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;