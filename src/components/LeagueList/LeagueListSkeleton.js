import React from 'react';
import './LeagueList.scss';

function LeagueListSkeleton() {
  return (
    <div className='league-table-wrapper'>
      <table className='league-table'>
        <thead>
          <tr>
            <th>League Name</th>
            <th>Sport Name</th>
            <th>Alternate League Name</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i} className='league-row'>
              <td>
                <div
                  className='skeleton skeleton-text'
                  style={{ width: '80%' }}
                />
              </td>
              <td>
                <div
                  className='skeleton skeleton-text'
                  style={{ width: '60%' }}
                />
              </td>
              <td>
                <div
                  className='skeleton skeleton-text'
                  style={{ width: '70%' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueListSkeleton;
