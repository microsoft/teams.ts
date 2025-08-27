import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /directory/administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/members',
    'get'
  >;
  'POST /directory/administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/members',
    'post'
  >;
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/members`
 *
 * Users and groups that are members of this administrative unit. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/members',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /directory/administrativeUnits/{administrativeUnit-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/members']['body'],
  params?: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/members',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
