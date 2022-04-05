import Route from '@ember/routing/route';

export default class PlayerStatsRoute extends Route {
  async model(params) {
    let apiKey = "";
    const response = await fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${params.username}&auth=${apiKey}`);
    const playerStats = await response.json();
    console.log(playerStats);
    return playerStats;
  }
}
