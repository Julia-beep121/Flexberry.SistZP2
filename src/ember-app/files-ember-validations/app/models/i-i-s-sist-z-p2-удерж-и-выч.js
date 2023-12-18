import {
  defineNamespace,
  defineProjections,
  Model as УдержИВычMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-удерж-и-выч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УдержИВычMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
