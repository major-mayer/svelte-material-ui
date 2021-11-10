import { classAdderBuilder } from '@smui/common/classadder/index.js';
import { Div } from '@smui/common/elements/index.js';

export default classAdderBuilder({
  class: 'mdc-dialog__header',
  component: Div,
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});