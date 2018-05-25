import {ACTIVE} from '../constants';

$('[data-tabs]').each((i, container) => {
  container = $(container);
  const controls = container.find('[data-tabs-control]');
  const contents = container.find('[data-tabs-content]');

  controls.each((i, control) => {
    control = $(control);
    const content = contents.filter(`[data-tabs-content="${control.data('tabs-control')}"]`);
    const otherControls = controls.not(control);
    const otherContents = contents.not(content);

    control.on('click', e => {
      e.preventDefault();
      if (control.hasClass(ACTIVE)) return;
      control
        .add(content)
        .addClass(ACTIVE);
      otherControls
        .add(otherContents)
        .removeClass(ACTIVE);
    });
  });

  controls
    .first()
    .trigger('click');
});
