import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
    'get'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /directory/administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/extensions`
 *
 * The collection of open extensions defined for this administrative unit. Nullable.
 */
export function list(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions']['response']
> {
  return {
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
    paramDefs: [
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
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for this administrative unit. Nullable.
 */
export function get(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/administrativeUnits/{administrativeUnit-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/extensions']['body'],
  params?: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/extensions']['response']
> {
  return {
    method: 'post',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
