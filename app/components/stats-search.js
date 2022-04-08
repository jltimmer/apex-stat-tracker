import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
// import ENV from '../../config/environment';

export default class StatsSearchComponent extends Component {
  @tracked username;
  @service router;

  @action
  search() {
    this.router.transitionTo('player-stats', username.value);
  }
}
