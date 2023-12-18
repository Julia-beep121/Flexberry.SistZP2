import {
  defineNamespace,
  defineProjections,
  Model as ПремииMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-премии';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПремииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
