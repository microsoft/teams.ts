import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    'delete'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    'patch'
  >;
}

/**
 * `DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['body'],
  params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    paramDefs: [{ name: 'privilegedApproval-id', in: 'path' }],
    params,
    body,
  };
}
