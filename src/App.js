import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LeagueTableView from './views/LeagueTable/LeagueTable';
import MenuBtn from './components/atoms/menuBtn';
import TeamView from './views/TeamView/TeamView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <MenuBtn />
        <Routes>
          <Route path="/" element={<LeagueTableView />} />
          <Route path="/team" element={<TeamView />} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">

        <MenuBtn category="hejsan"/>
        <MenuBtn category="goddag"/>
        <MenuBtn category="halloj"/>
        {/* <TeamView></TeamView> */}
        {/* <LeagueTableView></LeagueTableView> */}
      </header>
    </div>
  );
}

export default App;
