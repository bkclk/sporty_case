import React, { useState } from 'react';
import LeagueListItem from '../LeagueListItem';
import './LeagueList.scss';

function LeagueList({ leagues, searchTerm, selectedSport }) {
  const [openLeagueId, setOpenLeagueId] = useState(null);
  const showNoMatch =
    leagues.length === 0 && (searchTerm.trim() !== '' || selectedSport !== '');
  const showNoLeagues =
    leagues.length === 0 && searchTerm.trim() === '' && selectedSport === '';

  const handleToggle = (leagueId) => {
    setOpenLeagueId((prevId) => (prevId === leagueId ? null : leagueId));
  };

  return (
    <div className='league-table-wrapper'>
      <div className='league-table league-table-grid'>
        <div className='league-table-header league-table-grid-row'>
          <div className='league-table-col'>League</div>
          <div className='league-table-col'>Sport Type</div>
          <div className='league-table-col'>Alternate League</div>
        </div>
        {showNoLeagues ? (
          <div className='league-table-row no-match league-table-grid-row'>
            <div className='league-table-col no-match-message'>
              There is no available league currently.
            </div>
          </div>
        ) : showNoMatch ? (
          <div className='league-table-row no-match league-table-grid-row'>
            <div className='league-table-col no-match-message'>
              No league found that matches.
            </div>
          </div>
        ) : (
          leagues.map((league) => (
            <LeagueListItem
              key={league.id}
              league={league}
              open={openLeagueId === league.id}
              onToggle={() => handleToggle(league.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default LeagueList;
