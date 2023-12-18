import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sist-z-p2-премии', 'Unit | Serializer | i-i-s-sist-z-p2-премии', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sist-z-p2-премии',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sist-z-p2-вычет',
    'transform:i-i-s-sist-z-p2-критер-прем',
    'transform:i-i-s-sist-z-p2-прич-нетр',
    'transform:i-i-s-sist-z-p2-тип-отраб',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
