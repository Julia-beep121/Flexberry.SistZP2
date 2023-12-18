import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      сотрудники: { serialize: 'odata-id', deserialize: 'records' },
      больнЛист: { serialize: false, deserialize: 'records' },
      удержИВыч: { serialize: false, deserialize: 'records' },
      отпуск: { serialize: false, deserialize: 'records' },
      премии: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
