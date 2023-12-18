import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОтрабEnum from '../enums/i-i-s-sist-z-p2-тип-отраб';

export default FlexberryEnum.extend({
  enum: ТипОтрабEnum,
  sourceType: 'IIS.SistZP2.ТипОтраб'
});
