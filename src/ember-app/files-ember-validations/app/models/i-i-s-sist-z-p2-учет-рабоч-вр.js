import {
  defineNamespace,
  defineProjections,
  Model as УчетРабочВрMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-учет-рабоч-вр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УчетРабочВрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
