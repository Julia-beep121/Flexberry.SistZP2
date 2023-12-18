import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSistZP2ДолжностиLForm from './forms/i-i-s-sist-z-p2-должности-l';
import IISSistZP2ОрганизацииLForm from './forms/i-i-s-sist-z-p2-организации-l';
import IISSistZP2ОтделыLForm from './forms/i-i-s-sist-z-p2-отделы-l';
import IISSistZP2РасчетныйЛистLForm from './forms/i-i-s-sist-z-p2-расчетный-лист-l';
import IISSistZP2СотрудникиLForm from './forms/i-i-s-sist-z-p2-сотрудники-l';
import IISSistZP2УчетРабочВрLForm from './forms/i-i-s-sist-z-p2-учет-рабоч-вр-l';
import IISSistZP2ДолжностиEForm from './forms/i-i-s-sist-z-p2-должности-e';
import IISSistZP2ОрганизацииEForm from './forms/i-i-s-sist-z-p2-организации-e';
import IISSistZP2ОтделыEForm from './forms/i-i-s-sist-z-p2-отделы-e';
import IISSistZP2РасчетныйЛистEForm from './forms/i-i-s-sist-z-p2-расчетный-лист-e';
import IISSistZP2СотрудникиEForm from './forms/i-i-s-sist-z-p2-сотрудники-e';
import IISSistZP2УчетРабочВрEForm from './forms/i-i-s-sist-z-p2-учет-рабоч-вр-e';
import IISSistZP2БольнЛистModel from './models/i-i-s-sist-z-p2-больн-лист';
import IISSistZP2ДолжностиModel from './models/i-i-s-sist-z-p2-должности';
import IISSistZP2ОрганизацииModel from './models/i-i-s-sist-z-p2-организации';
import IISSistZP2ОтделыModel from './models/i-i-s-sist-z-p2-отделы';
import IISSistZP2ОтпускModel from './models/i-i-s-sist-z-p2-отпуск';
import IISSistZP2ПремииModel from './models/i-i-s-sist-z-p2-премии';
import IISSistZP2РасчетныйЛистModel from './models/i-i-s-sist-z-p2-расчетный-лист';
import IISSistZP2СотрудникиModel from './models/i-i-s-sist-z-p2-сотрудники';
import IISSistZP2УдержИВычModel from './models/i-i-s-sist-z-p2-удерж-и-выч';
import IISSistZP2УчетРабочВрModel from './models/i-i-s-sist-z-p2-учет-рабоч-вр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sist-z-p2-больн-лист': IISSistZP2БольнЛистModel,
    'i-i-s-sist-z-p2-должности': IISSistZP2ДолжностиModel,
    'i-i-s-sist-z-p2-организации': IISSistZP2ОрганизацииModel,
    'i-i-s-sist-z-p2-отделы': IISSistZP2ОтделыModel,
    'i-i-s-sist-z-p2-отпуск': IISSistZP2ОтпускModel,
    'i-i-s-sist-z-p2-премии': IISSistZP2ПремииModel,
    'i-i-s-sist-z-p2-расчетный-лист': IISSistZP2РасчетныйЛистModel,
    'i-i-s-sist-z-p2-сотрудники': IISSistZP2СотрудникиModel,
    'i-i-s-sist-z-p2-удерж-и-выч': IISSistZP2УдержИВычModel,
    'i-i-s-sist-z-p2-учет-рабоч-вр': IISSistZP2УчетРабочВрModel
  },

  'application-name': 'Sist z p2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sist z p2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sist z p2',
          title: 'Sist z p2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        организация: {
          caption: 'Организация',
          title: 'Организация',
          'i-i-s-sist-z-p2-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-sist-z-p2-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-sist-z-p2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-sist-z-p2-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        },
        зарплата: {
          caption: 'Зарплата',
          title: 'Зарплата',
          'i-i-s-sist-z-p2-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-sist-z-p2-расчетный-лист-l': {
            caption: 'Расчетный лист ',
            title: 'Расчетный лист'
          },
          'i-i-s-sist-z-p2-учет-рабоч-вр-l': {
            caption: 'Учет рабочего времени',
            title: 'Учет рабочего времени'
          }
        },
        'sist-z-p2': {
          caption: 'SistZP2',
          title: 'SistZP2',
          'i-i-s-sist-z-p2-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-sist-z-p2-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-sist-z-p2-учет-рабоч-вр-l': {
            caption: 'Учет рабоч вр',
            title: ''
          },
          'i-i-s-sist-z-p2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-sist-z-p2-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          },
          'i-i-s-sist-z-p2-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-sist-z-p2-должности-l': IISSistZP2ДолжностиLForm,
    'i-i-s-sist-z-p2-организации-l': IISSistZP2ОрганизацииLForm,
    'i-i-s-sist-z-p2-отделы-l': IISSistZP2ОтделыLForm,
    'i-i-s-sist-z-p2-расчетный-лист-l': IISSistZP2РасчетныйЛистLForm,
    'i-i-s-sist-z-p2-сотрудники-l': IISSistZP2СотрудникиLForm,
    'i-i-s-sist-z-p2-учет-рабоч-вр-l': IISSistZP2УчетРабочВрLForm,
    'i-i-s-sist-z-p2-должности-e': IISSistZP2ДолжностиEForm,
    'i-i-s-sist-z-p2-организации-e': IISSistZP2ОрганизацииEForm,
    'i-i-s-sist-z-p2-отделы-e': IISSistZP2ОтделыEForm,
    'i-i-s-sist-z-p2-расчетный-лист-e': IISSistZP2РасчетныйЛистEForm,
    'i-i-s-sist-z-p2-сотрудники-e': IISSistZP2СотрудникиEForm,
    'i-i-s-sist-z-p2-учет-рабоч-вр-e': IISSistZP2УчетРабочВрEForm
  },

});

export default translations;
