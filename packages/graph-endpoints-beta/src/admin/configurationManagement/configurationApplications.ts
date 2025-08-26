import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}': Operation<
    '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationApplications': Operation<
    '/admin/configurationManagement/configurationApplications',
    'get'
  >;
  'GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}': Operation<
    '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}': Operation<
    '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    'patch'
  >;
  'POST /admin/configurationManagement/configurationApplications': Operation<
    '/admin/configurationManagement/configurationApplications',
    'post'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationApplication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationApplications`
 *
 */
export function list(
  params?: IEndpoints['GET /admin/configurationManagement/configurationApplications']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationApplications']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationApplications',
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
 * `GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationApplication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationApplications/{configurationApplication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationApplications/{configurationApplication-id}',
    paramDefs: [{ name: 'configurationApplication-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationApplications`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationApplications']['body'],
  params?: IEndpoints['POST /admin/configurationManagement/configurationApplications']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationApplications']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationApplications',
    paramDefs: [],
    params,
    body,
  };
}
