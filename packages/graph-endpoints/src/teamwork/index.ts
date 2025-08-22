export * as deletedChats from './deletedChats';
export * as deletedTeams from './deletedTeams';
export * as sendActivityNotificationToRecipients from './sendActivityNotificationToRecipients';
export * as teamsAppSettings from './teamsAppSettings';
export * as workforceIntegrations from './workforceIntegrations';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teamwork': Operation<'/teamwork', 'get'>;
  'PATCH /teamwork': Operation<'/teamwork', 'patch'>;
}

/**
 * `GET /teamwork`
 *
 * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
 */
export function get(
  params?: IEndpoints['GET /teamwork']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork']['response']> {
  return {
    method: 'get',
    path: '/teamwork',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork']['body'],
  params?: IEndpoints['PATCH /teamwork']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork']['response']> {
  return {
    method: 'patch',
    path: '/teamwork',
    paramDefs: [],
    params,
    body,
  };
}
