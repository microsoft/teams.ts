import { IHtmlWidgetCallToolInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

/**
 * Routes for `htmlwidget/calltool` invokes.
 *
 * The Teams client adds `arguments.__msteams__ = { mcpUrl, correlationId }` to every request and overwrites any bot-supplied value.
 * The SDK passes it to the handler untouched.
 * Handlers should ignore it, validate `arguments` as untrusted input, never throw, and not authorize from `activity.from`.
 * Return `buildCallToolResponse(...)` so that `content`, `structuredContent` and `isError` are always present.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsHtmlWidget
 */
export type WidgetCallToolRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  'widget.callTool'?: RouteHandler<
    IActivityContext<IHtmlWidgetCallToolInvokeActivity, TExtraCtx>,
    InvokeResponse<'htmlwidget/calltool'> | InvokeResponse<'htmlwidget/calltool'>['body']
  >;
};
