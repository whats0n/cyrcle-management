const EDITING = 'is-editing';

$('.js-edit').each((i, container) => {
  container = $(container);

  container
    .find('.js-edit-control')
    .on('click', e => {
      e.preventDefault();
      container.toggleClass(EDITING);
    });
});
