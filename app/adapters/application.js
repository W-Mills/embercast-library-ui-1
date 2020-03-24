// import JSONAPIAdapter from '@ember-data/adapter/json-api';

// export default class ApplicationAdapter extends JSONAPIAdapter {
// }

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000'
});
