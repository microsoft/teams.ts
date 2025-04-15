import { IFileConsentInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { RouteHandler } from '../../types';
import { IActivityContext } from '../../contexts';

export type FileConsentActivityRoutes = {
  [K in IFileConsentInvokeActivity['value']['action'] as `file.consent.${K}`]?: RouteHandler<
    IActivityContext<IFileConsentInvokeActivity>,
    InvokeResponse<'fileConsent/invoke'> | InvokeResponse<'fileConsent/invoke'>['body']
  >;
};
