import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  НДФЛ: 'НДФЛ',
  Штраф: 'Штраф',
  ВозмещМатУщ: 'Возмещение материального ущерба',
  ВПенсФонд: 'В пенсионный фонд',
  СтрахВыч: 'Страховые вычеты',
  ВозврАвнаса: 'Возврат аванса'
});
