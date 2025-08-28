import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/administrativeUnits/{administrativeUnit-id}/members',
    'get'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/administrativeUnits/{administrativeUnit-id}/members',
    'post'
  >;
}

/**
 * `GET /administrativeUnits/{administrativeUnit-id}/members`
 *
 * Users and groups that are members of this administrative unit. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits/{administrativeUnit-id}/members',
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
 * `POST /administrativeUnits/{administrativeUnit-id}/members`
 *
 * Use this API to add a member (user, group, or device) to an administrative unit or to create a new group within an administrative unit. All group types can be created within an administrative unit. Note: Currently, it&#x27;s only possible to add one member at a time to an administrative unit.&#x60;
 */
export function create(
  body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/members']['body'],
  params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits/{administrativeUnit-id}/members',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
