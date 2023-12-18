import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачОтп: DS.attr('date'),
  датаОконОтп: DS.attr('date'),
  колДней: DS.attr('number'),
  номерДок: DS.attr('number'),
  расчетныйЛист: DS.belongsTo('i-i-s-sist-z-p2-расчетный-лист', { inverse: 'отпуск', async: false })
});

export let ValidationRules = {
  датаНачОтп: {
    descriptionKey: 'models.i-i-s-sist-z-p2-отпуск.validations.датаНачОтп.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконОтп: {
    descriptionKey: 'models.i-i-s-sist-z-p2-отпуск.validations.датаОконОтп.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-sist-z-p2-отпуск.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-sist-z-p2-отпуск.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-sist-z-p2-отпуск.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускE', 'i-i-s-sist-z-p2-отпуск', {
    номерДок: attr('Номер документа', { index: 0 }),
    датаНачОтп: attr('Дата начала отпуска', { index: 1 }),
    датаОконОтп: attr('Дата окончания отпуска', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 })
  });
};
