import Model, {attr} from '@ember-data/model';

export default class PlayerModel extends Model {
  @attr('string') username;
  @attr('number') level;
  // @attr('string') 
}
