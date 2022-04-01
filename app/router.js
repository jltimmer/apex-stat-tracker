import EmberRouter from '@ember/routing/router';
import config from 'apex-stat-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('player-stats');
});
