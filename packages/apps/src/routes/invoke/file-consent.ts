import { IFileConsentInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { MiddlewareContext } from '../../middleware-context';

export type FileConsentActivityRoutes = {
  [K in IFileConsentInvokeActivity['value']['action'] as `file.consent.${K}`]?: RouteHandler<
    MiddlewareContext<IFileConsentInvokeActivity>,
    InvokeResponse<'fileConsent/invoke'>
  >;
};
