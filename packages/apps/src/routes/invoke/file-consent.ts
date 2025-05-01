import { IFileConsentInvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

export type FileConsentActivityRoutes = {
  [K in IFileConsentInvokeActivity['value']['action'] as `file.consent.${K}`]?: RouteHandler<
    IActivityContext<IFileConsentInvokeActivity>,
    InvokeResponse<'fileConsent/invoke'> | InvokeResponse<'fileConsent/invoke'>['body']
  >;
};
