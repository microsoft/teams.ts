import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}': Operation<
    '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationDrifts': Operation<
    '/admin/configurationManagement/configurationDrifts',
    'get'
  >;
  'GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}': Operation<
    '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}': Operation<
    '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    'patch'
  >;
  'POST /admin/configurationManagement/configurationDrifts': Operation<
    '/admin/configurationManagement/configurationDrifts',
    'post'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationDrift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationDrifts`
 *
 */
export function list(
  params?: IEndpoints['GET /admin/configurationManagement/configurationDrifts']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationDrifts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationDrifts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationDrift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationDrifts/{configurationDrift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationDrifts/{configurationDrift-id}',
    paramDefs: [{ name: 'configurationDrift-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationDrifts`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationDrifts']['body'],
  params?: IEndpoints['POST /admin/configurationManagement/configurationDrifts']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationDrifts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationDrifts',
    paramDefs: [],
    params,
    body,
  };
}
