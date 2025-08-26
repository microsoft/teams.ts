import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions',
    'get'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /administrativeUnits/{administrativeUnit-id}/extensions`
 *
 * The collection of open extensions defined for this administrative unit. Nullable.
 */
export function list(
  params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits/{administrativeUnit-id}/extensions',
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
 * `GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for this administrative unit. Nullable.
 */
export function get(
  params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
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
 * `PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /administrativeUnits/{administrativeUnit-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/extensions']['body'],
  params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits/{administrativeUnit-id}/extensions',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
