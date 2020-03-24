import Route from '@ember/routing/route';

// export default class AuthorDetailRoute extends Route {
// }

export default Route.extend({
  model({ id }) {
    return this.store.findRecord('author', id);
  }
})
