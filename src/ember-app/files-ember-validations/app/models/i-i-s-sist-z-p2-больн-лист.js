import {
  defineNamespace,
  defineProjections,
  Model as БольнЛистMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-больн-лист';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БольнЛистMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
