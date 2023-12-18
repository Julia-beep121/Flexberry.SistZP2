import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  критерий: DS.attr('i-i-s-sist-z-p2-критер-прем'),
  сумма: DS.attr('decimal'),
  расчетныйЛист: DS.belongsTo('i-i-s-sist-z-p2-расчетный-лист', { inverse: 'премии', async: false })
});

export let ValidationRules = {
  критерий: {
    descriptionKey: 'models.i-i-s-sist-z-p2-премии.validations.критерий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-sist-z-p2-премии.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-sist-z-p2-премии.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПремииE', 'i-i-s-sist-z-p2-премии', {
    критерий: attr('Критерий', { index: 0 }),
    сумма: attr('Сумма', { index: 1 })
  });
};
