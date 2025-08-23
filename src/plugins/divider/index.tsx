import { PluginComponent } from '../Plugin';

export default class Divider extends PluginComponent {
  static pluginName = 'divider';

  render() {
    return <span className="rc-md-divider" />;
  }
}
