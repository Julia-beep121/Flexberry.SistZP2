import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sist-z-p2-отделы', 'Unit | Model | i-i-s-sist-z-p2-отделы', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sist-z-p2-больн-лист',
    'model:i-i-s-sist-z-p2-должности',
    'model:i-i-s-sist-z-p2-организации',
    'model:i-i-s-sist-z-p2-отделы',
    'model:i-i-s-sist-z-p2-отпуск',
    'model:i-i-s-sist-z-p2-премии',
    'model:i-i-s-sist-z-p2-расчетный-лист',
    'model:i-i-s-sist-z-p2-сотрудники',
    'model:i-i-s-sist-z-p2-удерж-и-выч',
    'model:i-i-s-sist-z-p2-учет-рабоч-вр',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
