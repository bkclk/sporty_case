import React from 'react';
import './LeagueListItem.scss';

function LeagueListItemSkeleton() {
  return (
    <tr>
      <td colSpan={3} style={{ textAlign: 'center', background: '#181818' }}>
        <div
          className='skeleton skeleton-badge'
          style={{ width: 80, height: 80, margin: 8, display: 'inline-block' }}
        />
      </td>
    </tr>
  );
}

export default LeagueListItemSkeleton;
