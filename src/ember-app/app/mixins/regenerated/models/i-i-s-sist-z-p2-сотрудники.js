import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  оклад: DS.attr('decimal'),
  почта: DS.attr('string'),
  процСтавка: DS.attr('decimal'),
  рабТел: DS.attr('string'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-sist-z-p2-должности', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-sist-z-p2-организации', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-sist-z-p2-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  процСтавка: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.процСтавка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  рабТел: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.рабТел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-sist-z-p2-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-sist-z-p2-сотрудники', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    рабТел: attr('Рабочий телефон', { index: 2 }),
    почта: attr('Почта', { index: 3 }),
    оклад: attr('Оклад', { index: 4 }),
    процСтавка: attr('Процентная ставка', { index: 5 }),
    должности: belongsTo('i-i-s-sist-z-p2-должности', 'Должность', {

    }, { index: 6, displayMemberPath: 'наименование' }),
    отделы: belongsTo('i-i-s-sist-z-p2-отделы', 'Отдел', {

    }, { index: 7, displayMemberPath: 'наименование' }),
    организации: belongsTo('i-i-s-sist-z-p2-организации', 'Организация', {

    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-sist-z-p2-сотрудники', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    рабТел: attr('Рабочий телефон', { index: 2 }),
    почта: attr('Почта', { index: 3 }),
    оклад: attr('Оклад', { index: 4 }),
    процСтавка: attr('Процентная ставка', { index: 5 }),
    должности: belongsTo('i-i-s-sist-z-p2-должности', 'Должность', {

    }, { index: 6, displayMemberPath: 'наименование' }),
    отделы: belongsTo('i-i-s-sist-z-p2-отделы', 'Отдел', {

    }, { index: 7, displayMemberPath: 'наименование' }),
    организации: belongsTo('i-i-s-sist-z-p2-организации', 'Организация', {

    }, { index: 8, displayMemberPath: 'наименование' })
  });
};
