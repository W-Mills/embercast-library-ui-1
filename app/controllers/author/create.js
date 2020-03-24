import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveAuthor(ev) {
      ev.preventDefault();

      let author = this.store.createRecord('author', this.model);
      author.save()
        .then(() => {
          this.transitionToRoute('author')
        });
    }
  }
});
