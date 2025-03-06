import { IFileConsentInvokeActivity, InvokeResponse } from '@microsoft/spark.api';

import { RouteHandler } from '../../types';
import { IMiddlewareContext } from '../../contexts';

export type FileConsentActivityRoutes = {
  [K in IFileConsentInvokeActivity['value']['action'] as `file.consent.${K}`]?: RouteHandler<
    IMiddlewareContext<IFileConsentInvokeActivity>,
    InvokeResponse<'fileConsent/invoke'>
  >;
};
