import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PlayerStatsRoute extends Route {
  @service store;

  async model(params) {
    const apiKey = '';
    const response = await fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${params.username}&auth=${apiKey}`);
    const playerStats = await response.json();
    console.log(playerStats);

    const player = this.store.createRecord('player', {
      username: playerStats.global.name,
      level: playerStats.global.level,
      rank: playerStats.global.rank.rankName,
      rankDiv: playerStats.global.rank.rankDiv,
      selectedLegend: playerStats.legends.selected.LegendName,
      selectedLegendImgLink: playerStats.legends.selected.ImgAssets.icon
    });

    player.save().then(() => {
      this.store.queryRecord('player', { username: playerStats.global.name }).then((playerRet) => {
        console.log(playerRet);
      })
    });

    return playerStats;
  }
}
