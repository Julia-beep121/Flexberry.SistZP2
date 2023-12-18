import { Serializer as ОтпускSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sist-z-p2-отпуск';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтпускSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
