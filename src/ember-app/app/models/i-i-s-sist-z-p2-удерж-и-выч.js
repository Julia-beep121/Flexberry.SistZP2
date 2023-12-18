import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УдержИВычMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-удерж-и-выч';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УдержИВычMixin, Validations, {
});

defineProjections(Model);

export default Model;
