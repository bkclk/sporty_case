let leaguesCache = null;
const badgeCache = {};

export async function fetchLeagues() {
  if (leaguesCache) {
    return leaguesCache;
  }
  try {
    const response = await fetch(
      'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch leagues: ' + response.status);
    }
    const data = await response.json();
    leaguesCache = data.leagues.map((l) => ({
      id: l.idLeague,
      name: l.strLeague,
      sport: l.strSport,
      alternate: l.strLeagueAlternate || '',
    }));
    return leaguesCache;
  } catch (error) {
    console.error('fetchLeagues error:', error);
    throw error;
  }
}

export async function fetchLeagueBadge(leagueId) {
  if (badgeCache[leagueId]) {
    return badgeCache[leagueId];
  }
  try {
    const response = await fetch(
      'https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=' +
        leagueId
    );
    if (!response.ok) {
      throw new Error('Failed to fetch league badge: ' + response.status);
    }
    const data = await response.json();
    const badge = data.seasons && data.seasons[0] && data.seasons[0].strBadge;
    badgeCache[leagueId] = badge;
    return badge;
  } catch (error) {
    console.error('fetchLeagueBadge error:', error);
    throw error;
  }
}
