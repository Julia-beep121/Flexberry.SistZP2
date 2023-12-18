import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sist-z-p2-должности-l');
  this.route('i-i-s-sist-z-p2-должности-e',
  { path: 'i-i-s-sist-z-p2-должности-e/:id' });
  this.route('i-i-s-sist-z-p2-должности-e.new',
  { path: 'i-i-s-sist-z-p2-должности-e/new' });
  this.route('i-i-s-sist-z-p2-организации-l');
  this.route('i-i-s-sist-z-p2-организации-e',
  { path: 'i-i-s-sist-z-p2-организации-e/:id' });
  this.route('i-i-s-sist-z-p2-организации-e.new',
  { path: 'i-i-s-sist-z-p2-организации-e/new' });
  this.route('i-i-s-sist-z-p2-отделы-l');
  this.route('i-i-s-sist-z-p2-отделы-e',
  { path: 'i-i-s-sist-z-p2-отделы-e/:id' });
  this.route('i-i-s-sist-z-p2-отделы-e.new',
  { path: 'i-i-s-sist-z-p2-отделы-e/new' });
  this.route('i-i-s-sist-z-p2-расчетный-лист-l');
  this.route('i-i-s-sist-z-p2-расчетный-лист-e',
  { path: 'i-i-s-sist-z-p2-расчетный-лист-e/:id' });
  this.route('i-i-s-sist-z-p2-расчетный-лист-e.new',
  { path: 'i-i-s-sist-z-p2-расчетный-лист-e/new' });
  this.route('i-i-s-sist-z-p2-сотрудники-l');
  this.route('i-i-s-sist-z-p2-сотрудники-e',
  { path: 'i-i-s-sist-z-p2-сотрудники-e/:id' });
  this.route('i-i-s-sist-z-p2-сотрудники-e.new',
  { path: 'i-i-s-sist-z-p2-сотрудники-e/new' });
  this.route('i-i-s-sist-z-p2-учет-рабоч-вр-l');
  this.route('i-i-s-sist-z-p2-учет-рабоч-вр-e',
  { path: 'i-i-s-sist-z-p2-учет-рабоч-вр-e/:id' });
  this.route('i-i-s-sist-z-p2-учет-рабоч-вр-e.new',
  { path: 'i-i-s-sist-z-p2-учет-рабоч-вр-e/new' });
});

export default Router;
