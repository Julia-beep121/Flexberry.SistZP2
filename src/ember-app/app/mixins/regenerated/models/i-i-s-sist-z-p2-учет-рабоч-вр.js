import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  отрабЧасы: DS.attr('number'),
  типОтр: DS.attr('i-i-s-sist-z-p2-тип-отраб'),
  сотрудники: DS.belongsTo('i-i-s-sist-z-p2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-sist-z-p2-учет-рабоч-вр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  отрабЧасы: {
    descriptionKey: 'models.i-i-s-sist-z-p2-учет-рабоч-вр.validations.отрабЧасы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типОтр: {
    descriptionKey: 'models.i-i-s-sist-z-p2-учет-рабоч-вр.validations.типОтр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-sist-z-p2-учет-рабоч-вр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчетРабочВрE', 'i-i-s-sist-z-p2-учет-рабоч-вр', {
    дата: attr('Дата', { index: 0 }),
    отрабЧасы: attr('Отработанные часы', { index: 1 }),
    типОтр: attr('Тип отработки', { index: 2 }),
    сотрудники: belongsTo('i-i-s-sist-z-p2-сотрудники', 'Сотрудник', {

    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('УчетРабочВрL', 'i-i-s-sist-z-p2-учет-рабоч-вр', {
    дата: attr('Дата', { index: 0 }),
    отрабЧасы: attr('Отработанные часы', { index: 1 }),
    типОтр: attr('Тип отработки', { index: 2 }),
    сотрудники: belongsTo('i-i-s-sist-z-p2-сотрудники', 'Сотрудник', {

    }, { index: 3, displayMemberPath: 'фИО' })
  });
};
