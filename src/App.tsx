import React from 'react';
import './App.css';
import {NavLink, Route, Routes, useParams} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <div><NavLink to={'/'}>main</NavLink></div>
            <div><NavLink to={'/login'}>login</NavLink></div>
            <div><NavLink to={'/profile'}>profile</NavLink></div>
            <div><NavLink to={'/profile/settings'}>profile/first param 1</NavLink></div>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div>profile</div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}

export default App;


