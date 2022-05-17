import Model, { attr } from '@ember-data/model';

export default class PlayerModel extends Model {
  @attr('string') username;
  @attr('string') level;
  @attr('string') rank;
  @attr('string') rankDiv;
  @attr('string') selectedLegend;
  @attr('string') selectedLegendImgLink;
}
