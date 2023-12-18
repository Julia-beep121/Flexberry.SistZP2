import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.организация.caption'),
          title: i18n.t('forms.application.sitemap.организация.title'),
          children: [{
            link: 'i-i-s-sist-z-p2-должности-l',
            caption: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-должности-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-sist-z-p2-организации-l',
            caption: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-организации-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-sist-z-p2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-сотрудники-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-sist-z-p2-отделы-l',
            caption: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.организация.i-i-s-sist-z-p2-отделы-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.зарплата.caption'),
          title: i18n.t('forms.application.sitemap.зарплата.title'),
          children: [{
            link: 'i-i-s-sist-z-p2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.зарплата.i-i-s-sist-z-p2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.зарплата.i-i-s-sist-z-p2-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-sist-z-p2-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.зарплата.i-i-s-sist-z-p2-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.зарплата.i-i-s-sist-z-p2-расчетный-лист-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-sist-z-p2-учет-рабоч-вр-l',
            caption: i18n.t('forms.application.sitemap.зарплата.i-i-s-sist-z-p2-учет-рабоч-вр-l.caption'),
            title: i18n.t('forms.application.sitemap.зарплата.i-i-s-sist-z-p2-учет-рабоч-вр-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})