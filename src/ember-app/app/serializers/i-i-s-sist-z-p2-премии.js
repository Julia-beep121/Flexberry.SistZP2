import { Serializer as ПремииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sist-z-p2-премии';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПремииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
