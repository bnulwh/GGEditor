import GGEditorCore from 'gg-editor-core';
import { EVENT_BEFORE_ADD_PAGE } from '@common/constants';
import { uniqueId } from '@utils';

export default class Editor extends GGEditorCore {
  constructor(options) {
    super(options);

    this.id = uniqueId();

    this.on(EVENT_BEFORE_ADD_PAGE, ({ className }) => {
      console.log('add page:'+ className)
    });
  }
}
