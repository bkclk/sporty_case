import React, { useState } from 'react';
import { fetchLeagueBadge } from '../../services/api';
import './LeagueListItem.scss';

function LeagueListItem({ league, open, onToggle }) {
  const [badge, setBadge] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!open && !badge) {
      setLoading(true);
      try {
        const badgeUrl = await fetchLeagueBadge(league.id);
        setBadge(badgeUrl);
      } catch (error) {
        console.error('Error fetching league badge:', error);
        alert('There is a problem with the server. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    if (onToggle) onToggle();
  };

  return (
    <>
      <div
        className={`league-table-row league-row league-row-clickable`}
        onClick={handleClick}
      >
        <div className='league-table-col league-name'>{league.name}</div>
        <div className='league-table-col league-sport'>{league.sport}</div>
        <div className='league-table-col league-alternate'>
          {league.alternate || '-'}
        </div>
      </div>
      {open && (
        <div className={`league-table-row badge-row`}>
          <div className='league-table-col badge-container'>
            {loading ? (
              <div className='loading-spinner' />
            ) : badge ? (
              <>
                <img src={badge} alt='League Badge' className='league-badge' />
                <span className='league-title'>{league.name}</span>
              </>
            ) : (
              <span>No badge found for this league.</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default LeagueListItem;
