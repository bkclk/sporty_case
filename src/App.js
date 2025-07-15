import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import LeagueList from './components/LeagueList';
import { fetchLeagues } from './services/api';
import Fuse from 'fuse.js';

function App() {
  const [leagues, setLeagues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [sportTypes, setSportTypes] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchLeagues()
      .then((leaguesData) => {
        setLeagues(leaguesData);
        const sports = Array.from(new Set(leaguesData.map((l) => l.sport)));
        setSportTypes(sports);
      })
      .catch((error) => {
        console.error('Error fetching leagues:', error);
        alert('There is a problem with the server. Please try again later.');
      });
  }, []);

  // Fuzzy search
  let filteredLeagues = leagues;
  if (searchTerm) {
    const fuse = new Fuse(leagues, {
      keys: ['name', 'alternate'],
      threshold: 0.4,
    });
    filteredLeagues = fuse.search(searchTerm).map((result) => result.item);
  }
  // Filter by sport type
  filteredLeagues = filteredLeagues.filter(
    (league) => selectedSport === '' || league.sport === selectedSport
  );
  // Sorting
  if (sortBy === 'name') {
    filteredLeagues = [...filteredLeagues].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === 'sport') {
    filteredLeagues = [...filteredLeagues].sort((a, b) =>
      a.sport.localeCompare(b.sport)
    );
  }

  return (
    <div className='App'>
      <div className='container'>
        <nav>
          <Navbar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            sportTypes={sportTypes}
            selectedSport={selectedSport}
            onSportChange={setSelectedSport}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </nav>
        <main>
          <LeagueList
            leagues={filteredLeagues}
            searchTerm={searchTerm}
            selectedSport={selectedSport}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
