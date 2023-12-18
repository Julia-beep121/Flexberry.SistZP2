import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УчетРабочВрMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-учет-рабоч-вр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УчетРабочВрMixin, Validations, {
});

defineProjections(Model);

export default Model;
