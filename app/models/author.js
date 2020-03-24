// import Model, { attr } from '@ember-data/model';

// export default class AuthorModel extends Model {
  // @attr() first;
  // @attr() last;
// }

import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr(),
  last: DS.attr()
})
