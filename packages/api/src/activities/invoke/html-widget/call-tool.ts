import { ICallToolRequest } from '../../../models';
import { IActivity } from '../../activity';

export interface IHtmlWidgetCallToolInvokeActivity extends IActivity<'invoke'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'htmlwidget/calltool';

  /**
   * A value that is associated with the activity.
   */
  value: ICallToolRequest;
}
