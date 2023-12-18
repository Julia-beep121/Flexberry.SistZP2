import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВычетEnum from '../enums/i-i-s-sist-z-p2-вычет';

export default FlexberryEnum.extend({
  enum: ВычетEnum,
  sourceType: 'IIS.SistZP2.Вычет'
});
