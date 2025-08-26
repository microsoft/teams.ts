export * as teamsApps from './teamsApps';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /appCatalogs': Operation<'/appCatalogs', 'get'>;
  'PATCH /appCatalogs': Operation<'/appCatalogs', 'patch'>;
}

/**
 * `GET /appCatalogs`
 *
 */
export function list(
  params?: IEndpoints['GET /appCatalogs']['parameters']
): EndpointRequest<IEndpoints['GET /appCatalogs']['response']> {
  return {
    method: 'get',
    path: '/appCatalogs',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /appCatalogs`
 *
 */
export function update(
  body: IEndpoints['PATCH /appCatalogs']['body'],
  params?: IEndpoints['PATCH /appCatalogs']['parameters']
): EndpointRequest<IEndpoints['PATCH /appCatalogs']['response']> {
  return {
    method: 'patch',
    path: '/appCatalogs',
    paramDefs: [],
    params,
    body,
  };
}
