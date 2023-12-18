import { Serializer as БольнЛистSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sist-z-p2-больн-лист';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БольнЛистSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
