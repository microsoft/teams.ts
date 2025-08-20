export * as assignments from './assignments';
export * as selfActivate from './selfActivate';
export * as selfDeactivate from './selfDeactivate';
export * as settings from './settings';
export * as summary from './summary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    'delete'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    'patch'
  >;
}

/**
 * `DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo']['body'],
  params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    paramDefs: [{ name: 'privilegedApproval-id', in: 'path' }],
    params,
    body,
  };
}
