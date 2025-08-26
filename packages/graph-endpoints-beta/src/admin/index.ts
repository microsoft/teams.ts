export * as appsAndServices from './appsAndServices';
export * as configurationManagement from './configurationManagement';
export * as dynamics from './dynamics';
export * as edge from './edge';
export * as entra from './entra';
export * as exchange from './exchange';
export * as forms from './forms';
export * as microsoft365Apps from './microsoft365Apps';
export * as people from './people';
export * as reportSettings from './reportSettings';
export * as serviceAnnouncement from './serviceAnnouncement';
export * as sharepoint from './sharepoint';
export * as teams from './teams';
export * as todo from './todo';
export * as windows from './windows';

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
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/admin',
    paramDefs: [],
    params,
    body,
  };
}
