export * as appCredentialSignInActivities from './appCredentialSignInActivities';
export * as applicationSignInDetailedSummary from './applicationSignInDetailedSummary';
export * as authenticationMethods from './authenticationMethods';
export * as credentialUserRegistrationDetails from './credentialUserRegistrationDetails';
export * as dailyPrintUsage from './dailyPrintUsage';
export * as dailyPrintUsageByPrinter from './dailyPrintUsageByPrinter';
export * as dailyPrintUsageByUser from './dailyPrintUsageByUser';
export * as dailyPrintUsageSummariesByPrinter from './dailyPrintUsageSummariesByPrinter';
export * as dailyPrintUsageSummariesByUser from './dailyPrintUsageSummariesByUser';
export * as healthMonitoring from './healthMonitoring';
export * as monthlyPrintUsageByPrinter from './monthlyPrintUsageByPrinter';
export * as monthlyPrintUsageByUser from './monthlyPrintUsageByUser';
export * as monthlyPrintUsageSummariesByPrinter from './monthlyPrintUsageSummariesByPrinter';
export * as monthlyPrintUsageSummariesByUser from './monthlyPrintUsageSummariesByUser';
export * as partners from './partners';
export * as security from './security';
export * as serviceActivity from './serviceActivity';
export * as servicePrincipalSignInActivities from './servicePrincipalSignInActivities';
export * as sla from './sla';
export * as userCredentialUsageDetails from './userCredentialUsageDetails';
export * as userInsights from './userInsights';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /reports': Operation<'/reports', 'get'>;
  'PATCH /reports': Operation<'/reports', 'patch'>;
}

/**
 * `GET /reports`
 *
 */
export function list(
  params?: IEndpoints['GET /reports']['parameters']
): EndpointRequest<IEndpoints['GET /reports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports']['body'],
  params?: IEndpoints['PATCH /reports']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports',
    paramDefs: [],
    params,
    body,
  };
}
