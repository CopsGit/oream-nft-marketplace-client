import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Create, Details, Explore, Home, Profile, Search} from './pages';
import Navbar from "./components/Layout/Navbar";


const App = () => {
    return (
        <div className="relative sm:-8 min-h-screen flex flex-row">
            {/*<div className="sm:flex hidden mr-10 relative">*/}
            {/*    <Sidebar />*/}
            {/*</div>*/}

            <div className="flex-1 max-sm:w-full mx-auto sm:pr-5 bg-[#26100e]">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
