import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  иНН: DS.attr('number'),
  код: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  оГРН: DS.attr('number')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-sist-z-p2-организации.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-sist-z-p2-организации.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-sist-z-p2-организации.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-sist-z-p2-организации.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-sist-z-p2-организации.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-sist-z-p2-организации.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацииE', 'i-i-s-sist-z-p2-организации', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    кПП: attr('КПП', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 }),
    адрес: attr('Адрес', { index: 5 })
  });

  modelClass.defineProjection('ОрганизацииL', 'i-i-s-sist-z-p2-организации', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    кПП: attr('КПП', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 }),
    адрес: attr('Адрес', { index: 5 })
  });
};
