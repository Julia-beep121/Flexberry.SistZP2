import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачПер: DS.attr('date'),
  датаОкончПер: DS.attr('date'),
  номерДок: DS.attr('number'),
  общаяСумма: DS.attr('decimal'),
  сотрудники: DS.belongsTo('i-i-s-sist-z-p2-сотрудники', { inverse: null, async: false }),
  больнЛист: DS.hasMany('i-i-s-sist-z-p2-больн-лист', { inverse: 'расчетныйЛист', async: false }),
  удержИВыч: DS.hasMany('i-i-s-sist-z-p2-удерж-и-выч', { inverse: 'расчетныйЛист', async: false }),
  отпуск: DS.hasMany('i-i-s-sist-z-p2-отпуск', { inverse: 'расчетныйЛист', async: false }),
  премии: DS.hasMany('i-i-s-sist-z-p2-премии', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  датаНачПер: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.датаНачПер.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончПер: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.датаОкончПер.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  общаяСумма: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.общаяСумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  больнЛист: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.больнЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  удержИВыч: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.удержИВыч.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  отпуск: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.отпуск.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  премии: {
    descriptionKey: 'models.i-i-s-sist-z-p2-расчетный-лист.validations.премии.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-sist-z-p2-расчетный-лист', {
    номерДок: attr('Номер документа', { index: 0 }),
    датаНачПер: attr('Дата начала периода', { index: 1 }),
    датаОкончПер: attr('Дата окончания периода', { index: 2 }),
    общаяСумма: attr('Общая сумма', { index: 3 }),
    сотрудники: belongsTo('i-i-s-sist-z-p2-сотрудники', 'Сотрудник', {

    }, { index: 4, displayMemberPath: 'фИО' }),
    больнЛист: hasMany('i-i-s-sist-z-p2-больн-лист', 'Больничный лист', {
      номерДок: attr('Номер документа', { index: 0 }),
      датаНачБол: attr('Дата начала больничного', { index: 1 }),
      датаОконБол: attr('Дата окончания больничного', { index: 2 }),
      колДней: attr('Количество дней', { index: 3 }),
      первичный: attr('Первичный', { index: 4 }),
      повторный: attr('Повторный', { index: 5 }),
      причина: attr('Причина ', { index: 6 }),
      заСчетРаб: attr('За счет работ', { index: 7 }),
      заСчетФСС: attr('За счет ФСС', { index: 8 }),
      всегоНачисл: attr('Всего начислений', { index: 9 })
    }),
    отпуск: hasMany('i-i-s-sist-z-p2-отпуск', 'Отпускной лист', {
      номерДок: attr('Номер документа', { index: 0 }),
      датаНачОтп: attr('Дата начала отпуска', { index: 1 }),
      датаОконОтп: attr('Дата окончания отпуска', { index: 2 }),
      колДней: attr('Количество дней', { index: 3 })
    }),
    премии: hasMany('i-i-s-sist-z-p2-премии', 'Премия', {
      критерий: attr('Критерий', { index: 0 }),
      сумма: attr('Сумма', { index: 1 })
    }),
    удержИВыч: hasMany('i-i-s-sist-z-p2-удерж-и-выч', 'Удержание и вычеты', {
      название: attr('Название', { index: 0 }),
      сумма: attr('Сумма', { index: 1 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-sist-z-p2-расчетный-лист', {
    номерДок: attr('Номер документа', { index: 0 }),
    датаНачПер: attr('Дата начала периода', { index: 1 }),
    датаОкончПер: attr('Дата окончания периода', { index: 2 }),
    общаяСумма: attr('Общая сумма', { index: 3 }),
    сотрудники: belongsTo('i-i-s-sist-z-p2-сотрудники', 'Сотрудник', {

    }, { index: 4, displayMemberPath: 'фИО' }),
    больнЛист: hasMany('i-i-s-sist-z-p2-больн-лист', 'Больничный лист', {
      номерДок: attr('Номер документа', { index: 0 }),
      датаНачБол: attr('Дата начала больничного', { index: 1 }),
      датаОконБол: attr('Дата окончания больничного', { index: 2 }),
      колДней: attr('Количество дней', { index: 3 }),
      первичный: attr('Первичный', { index: 4 }),
      повторный: attr('Повторный', { index: 5 }),
      причина: attr('Причина ', { index: 6 }),
      заСчетРаб: attr('За счет работ', { index: 7 }),
      заСчетФСС: attr('За счет ФСС', { index: 8 }),
      всегоНачисл: attr('Всего начислений', { index: 9 })
    }),
    отпуск: hasMany('i-i-s-sist-z-p2-отпуск', 'Отпускной лист', {
      номерДок: attr('Номер документа', { index: 0 }),
      датаНачОтп: attr('Дата начала отпуска', { index: 1 }),
      датаОконОтп: attr('Дата окончания отпуска', { index: 2 }),
      колДней: attr('Количество дней', { index: 3 })
    }),
    премии: hasMany('i-i-s-sist-z-p2-премии', 'Премия', {
      критерий: attr('Критерий', { index: 0 }),
      сумма: attr('Сумма', { index: 1 })
    }),
    удержИВыч: hasMany('i-i-s-sist-z-p2-удерж-и-выч', 'Удержание и вычеты', {
      название: attr('Название', { index: 0 }),
      сумма: attr('Сумма', { index: 1 })
    })
  });
};
