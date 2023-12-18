import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КритерПремEnum from '../enums/i-i-s-sist-z-p2-критер-прем';

export default FlexberryEnum.extend({
  enum: КритерПремEnum,
  sourceType: 'IIS.SistZP2.КритерПрем'
});
