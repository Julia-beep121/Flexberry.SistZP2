import {
  defineNamespace,
  defineProjections,
  Model as ОтпускMixin
} from '../mixins/regenerated/models/i-i-s-sist-z-p2-отпуск';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтпускMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
