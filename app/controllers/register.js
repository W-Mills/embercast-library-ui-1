import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveUser(attrs) {
      let user = this.store.createRecord('user', attrs);

      user.save()
        .then(() => {
          this.transitionToRoute('index');
        })
        .catch(() => {
          // set model with attrs so if invalid entries form stays filled out
          this.set('model', attrs);
          this.set('errors', user.get('errors'));
        });
    }
  }
});
