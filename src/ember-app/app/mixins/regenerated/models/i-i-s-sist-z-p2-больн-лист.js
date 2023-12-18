import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всегоНачисл: DS.attr('decimal'),
  датаНачБол: DS.attr('date'),
  датаОконБол: DS.attr('date'),
  заСчетРаб: DS.attr('decimal'),
  заСчетФСС: DS.attr('decimal'),
  колДней: DS.attr('number'),
  номерДок: DS.attr('number'),
  первичный: DS.attr('boolean', { defaultValue: false }),
  повторный: DS.attr('boolean', { defaultValue: false }),
  причина: DS.attr('i-i-s-sist-z-p2-прич-нетр'),
  расчетныйЛист: DS.belongsTo('i-i-s-sist-z-p2-расчетный-лист', { inverse: 'больнЛист', async: false })
});

export let ValidationRules = {
  всегоНачисл: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.всегоНачисл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  датаНачБол: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.датаНачБол.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконБол: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.датаОконБол.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заСчетРаб: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.заСчетРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заСчетФСС: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.заСчетФСС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  первичный: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.первичный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  повторный: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.повторный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-sist-z-p2-больн-лист.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БольнЛистE', 'i-i-s-sist-z-p2-больн-лист', {
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
  });
};
