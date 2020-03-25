// for ember-fire transitions, not working with this build

// const duration = 600;
// const slidingCardOut = [
//   {
//     pickOld: '.slide-out-bg',
//     use: ['wait', duration, { then: 'fade', { duration }}]
//   },
//   {
//     pickOld: 'slide-out-card',
//     use: ['toRight', { duration }]
//   }
// ];

// const slidingCardIn = [
//   {
//     pickNew: '.slide-out-bg',
//     use: ['fade', { duration }]
//   },
//   {
//     pickNew: '.slide-out-card',
//     use: ['wait', duration, { then: 'toLeft' }, { duration }]
//   }
// ];

// export default function(){
//   this.transition(
//     this.hasClass('modal-if'),
//     this.use('fade', { duration })
//   );

//   this.transition(
//     this.fromRoute('book.detail.index'),        // sets route to apply transition to
//     this.use('toLeft', { duration }),           // sets type of transition
//     this.reverse('toRight', { duration })       // makes animation happen on reverse as well
//   );

//   this.transition(
//     this.fromRoute('author.detail.index'),
//     this.use('fade', { duration }),
//     this.reverse('fade', { duration }),
//   );

//   this.transition(
//     this.fromRoute('author.index'),
//     this.use('explode', ...slidingCardIn),
//     this.reverse('explode', ...slidingCardOut)
//   );

//   this.transition(
//     this.fromRoute('book.index'),
//     this.use('explode', ...slidingCardIn),
//     this.reverse('explode', ...slidingCardOut)
//   );

//   // Add your transitions here, like:
//   //   this.transition(
//   //     this.fromRoute('people.index'),
//   //     this.toRoute('people.detail'),
//   //     this.use('toLeft'),
//   //     this.reverse('toRight')
//   //   );
// }
