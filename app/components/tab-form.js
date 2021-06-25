import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import classic from 'ember-classic-decorator';
import { tagName } from '@ember-decorators/component';

@classic
@tagName('')
export default class TabForm extends Component {
  @alias('tab.model')
  model;
}
