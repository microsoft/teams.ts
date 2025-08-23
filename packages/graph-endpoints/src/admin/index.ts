export * as edge from './edge';
export * as microsoft365Apps from './microsoft365Apps';
export * as people from './people';
export * as reportSettings from './reportSettings';
export * as serviceAnnouncement from './serviceAnnouncement';
export * as sharepoint from './sharepoint';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /admin': Operation<'/admin', 'get'>;
  'PATCH /admin': Operation<'/admin', 'patch'>;
}

/**
 * `GET /admin`
 *
 */
export function get(
  params?: IEndpoints['GET /admin']['parameters']
): EndpointRequest<IEndpoints['GET /admin']['response']> {
  return {
    method: 'get',
    path: '/admin',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin']['body'],
  params?: IEndpoints['PATCH /admin']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin']['response']> {
  return {
    method: 'patch',
    path: '/admin',
    paramDefs: [],
    params,
    body,
  };
}
