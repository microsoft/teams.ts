import { FileConsentInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { MiddlewareContext } from '../../middleware-context';

export type FileConsentActivityRoutes = {
  [K in FileConsentInvokeActivity['value']['action'] as `file.consent.${K}`]?: RouteHandler<
    MiddlewareContext<FileConsentInvokeActivity>,
    InvokeResponse<'fileConsent/invoke'>
  >;
};
