import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('i-i-s-sist-z-p2-вычет'),
  сумма: DS.attr('decimal'),
  расчетныйЛист: DS.belongsTo('i-i-s-sist-z-p2-расчетный-лист', { inverse: 'удержИВыч', async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-sist-z-p2-удерж-и-выч.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-sist-z-p2-удерж-и-выч.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-sist-z-p2-удерж-и-выч.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УдержИВычE', 'i-i-s-sist-z-p2-удерж-и-выч', {
    название: attr('Название', { index: 0 }),
    сумма: attr('Сумма', { index: 1 })
  });
};
