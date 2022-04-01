import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import ENV from '../../config/environment';

export default class StatsSearchComponent extends Component {
  @tracked username;

  @action
  async search() {
    let apiKey = "";
    // e.preventDefault();
    // console.log(ENV[TEST_KEY]);
    // fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${username.value}&auth=${apiKey}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // console.log({username: username.value, thing: this});
    const response = await fetch(
      `https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${username.value}&auth=${apiKey}`
    );
    const playerStats = await response.json();
    
    store.createRecord('post', {
      username: playerStats.name,
      level: playerStats.level
    });
    console.log(playerStats);
  }
}
