import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    'delete'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    'patch'
  >;
}

/**
 * `DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['body'],
  params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    paramDefs: [{ name: 'privilegedApproval-id', in: 'path' }],
    params,
    body,
  };
}
