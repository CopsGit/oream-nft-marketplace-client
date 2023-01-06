import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Create, Details, Explore, Home, Profile, Search} from './pages';
import Navbar from "./components/Layout/Navbar";
import Bottom from "./components/Layout/Bottom";
import Collection from "./pages/Collection";


const App = () => {
    return (
        <div className="relative sm:-8 h-full flex flex-row">
            {/*<div className="sm:flex hidden mr-10 relative">*/}
            {/*    <Sidebar />*/}
            {/*</div>*/}

            <div className="flex-1 max-w-full max-sm:w-full mx-auto sm:pr-5 bg-gradient-to-r from-[#ef3c00] to-[#130604]">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/collection/:id" element={<Collection />} />
                    <Route path="/detail/:id" element={<Details />} />
                </Routes>

                <Bottom />
            </div>
        </div>
    )
}

export default App
