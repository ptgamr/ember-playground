import TabForm from './tab-form';
import classic from 'ember-classic-decorator';
import { tagName } from '@ember-decorators/component';

@classic
@tagName('')
export default class MyTabForm extends TabForm {
  // If I leave this, didInsertElement will log null
  // comment out, didInsertElement will log the model we passed in as props
  model = null;

  didInsertElement() {
    super.didInsertElement(...arguments);

    console.log('didInsertElement model:', this.model);
  }
}
